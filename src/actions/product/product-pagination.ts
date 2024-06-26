'use server';

import prisma from '@/lib/prisma';
import { Brands } from '@prisma/client';

interface PaginationOptions {
  page?: number;
  take?: number;
  brand?: string;
}

export const getPaginatedProductsWithImages = async ({
  page = 1,
  take = 12,
  brand,
}: PaginationOptions) => {
  if (isNaN(Number(page))) page = 1;
  if (isNaN(Number(take))) take = 12;
  if (page < 1) page = 1;

  try {
    // 1. Get products with images
    const products = await prisma.product.findMany({
      take: take,
      skip: (page - 1) * take,
      include: {
        ProductImage: {
          take: 2,
          select: {
            url: true,
          },
        },
      },
      where: {
        brand: brand as Brands,
      },
    });

    // 2. Get the total pages
    // todo
    const totalCount = await prisma.product.count({
      where: {
        brand: brand as Brands,
      },
    });
    const totalPages = Math.ceil(totalCount / take);

    return {
      // currentPage: page,
      totalPages: totalPages,
      products: products.map((product) => ({
        ...product,
        images: product.ProductImage.map((image) => image.url),
      })),
    };
  } catch (error) {
    throw new Error('No se pudo cargar los productos' + error);
  }
};
