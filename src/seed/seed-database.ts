import { initialData } from './seed';
import { countries } from './seed-countries';
import prisma from '../lib/prisma';

async function main() {
  // 1. Erase previous data

  await prisma.orderAddress.deleteMany();
  await prisma.orderItem.deleteMany();
  await prisma.order.deleteMany();
  await prisma.userAddress.deleteMany();
  await prisma.user.deleteMany();
  await prisma.country.deleteMany();
  await prisma.productImage.deleteMany();
  await prisma.product.deleteMany();
  await prisma.categoryBrand.deleteMany();

  const { users, brands, products } = initialData;

  // 0. Countries
  await prisma.country.createMany({
    data: countries,
  });

  // 1. Users
  await prisma.user.createMany({
    data: users,
  });

  // 2. Brands
  const brandsData = brands.map((name) => ({ name }));

  await prisma.categoryBrand.createMany({
    data: brandsData,
  });

  const brandsDB = await prisma.categoryBrand.findMany();

  const brandsMap = brandsDB.reduce((map, brandCategory) => {
    map[brandCategory.name] = brandCategory.id;

    return map;
  }, {} as Record<string, string>); // <string = shirt, string = categoryID>

  // 3. Products

  products.forEach(async (product) => {
    const { brand, images, ...rest } = product;

    const dbProduct = await prisma.product.create({
      data: {
        ...rest,
        brand: brand,
        categoryBrandId: brandsMap[brand],
      },
    });

    // 4. Product Images
    const imagesData = images.map((image) => ({
      url: image,
      productId: dbProduct.id,
    }));

    await prisma.productImage.createMany({
      data: imagesData,
    });
  });

  console.log('Seed executed successfully');
}

(() => {
  if (process.env.NODE_ENV === 'production') return;

  main();
})();
