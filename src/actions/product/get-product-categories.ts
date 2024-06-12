'use sever';

import prisma from '@/lib/prisma';

export const getProductCategories = async () => {
  try {
    const categories = await prisma.categoryBrand.findMany({
      orderBy: {
        name: 'asc',
      },
    });

    return { ok: true, categories };
  } catch (error) {
    console.log(error);
    return { ok: false, categories: [] };
  }
};
