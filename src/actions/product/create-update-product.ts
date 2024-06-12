'use server';

import prisma from '@/lib/prisma';
import { Brands, Product } from '@prisma/client';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';
import { v2 as cloudinary } from 'cloudinary';
cloudinary.config(process.env.CLOUDINARY_URL ?? '');

const ProductSchema = z.object({
  id: z.string().uuid().optional().nullable(),
  title: z.string().min(3).max(255),
  slug: z.string().min(3).max(255),
  characteristics: z.string(),
  description: z.string(),
  price: z.coerce
    .number()
    .min(0)
    .transform((val) => Number(val.toFixed(2))),
  inStock: z.coerce
    .number()
    .min(0)
    .transform((val) => Number(val.toFixed(0))),
  brand: z.nativeEnum(Brands),
  categoryBrandId: z.string().uuid(),
});

export const createUpdateProduct = async (formData: FormData) => {
  const data = Object.fromEntries(formData);
  const parseProduct = ProductSchema.safeParse(data);

  if (!parseProduct.success) {
    console.log(parseProduct.error);
    return { ok: false };
  }

  const product = parseProduct.data;
  product.slug = product.slug.toLowerCase().replace(/ /g, '-').trim();

  const { id, ...rest } = product;

  try {
    const prismaTx = await prisma.$transaction(async (tx) => {
      let product: Product;

      if (id) {
        //update
        product = await tx.product.update({
          where: {
            id,
          },
          data: {
            ...rest,
          },
        });
      } else {
        //create
        product = await tx.product.create({
          data: {
            ...rest,
          },
        });
      }

      // Upload process of images
      if (formData.getAll('images')) {
        // [https://url.jpg, https://url.jpg]
        const images = await uploadImages(formData.getAll('images') as File[]);
        if (!images) throw new Error('No se pudieron subir las imágenes');

        await tx.productImage.createMany({
          data: images.map((image) => ({
            url: image!,
            productId: product.id,
          })),
        });
      }

      return {
        product,
      };
    });

    //! REVALIDATE PATH
    revalidatePath('/admin/products');
    revalidatePath(`/admin/product/${product.slug}`);
    revalidatePath(`/`);
    revalidatePath(`/product/${product.slug}`);

    return { ok: true, product: prismaTx.product };
  } catch (error) {
    console.log(error);
    return { ok: false, message: 'No se pudo actualizar el producto' };
  }
};

const uploadImages = async (images: File[]) => {
  try {
    const uploadPromises = images.map(async (image) => {
      try {
        const buffer = await image.arrayBuffer();
        const base64 = Buffer.from(buffer).toString('base64');

        return cloudinary.uploader
          .upload(`data:image/jpeg;base64,${base64}`, {
            folder: 'teslo-shop',
          })
          .then((res) => res.secure_url);
      } catch (error) {
        console.log(error);
        return null;
      }
    });

    const uploadedImages = await Promise.all(uploadPromises);

    return uploadedImages;
  } catch (error) {
    console.log(error);
    return null;
  }
};
