'use server';

import prisma from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export const deleteProduct = async (id: string) => {
  //TODO IMPLEMENT DELETE PRODUCT FROM CLODINARY WHEN DELETING PRODUCT

  try {
    try {
      await prisma.productImage.deleteMany({
        where: {
          productId: id,
        },
      });
    } catch (error) {
      console.error(error);
      return {
        ok: false,
        message: 'Error deleting product images',
      };
    }
    const deletedProduct = await prisma.product.delete({
      where: {
        id,
      },
      select: {
        slug: true,
      },
    });

    //! Revalidate paths
    revalidatePath('/admin/products');
    revalidatePath(`/admin/product/${deletedProduct.slug}`);
    revalidatePath(`/`);
    revalidatePath(`/product/${deletedProduct.slug}`);

    return {
      ok: true,
      message: `Product: ${id.split('-').at(-1)} deleted`,
    };
  } catch (error) {
    console.error(error);
    return {
      ok: false,
      message: 'Error deleting product',
    };
  }
};
