export const revalidate = 60;

import { getPaginatedProductsWithImages } from '@/actions';
import { Pagination, ProductGrid, Title } from '@/components';
import { redirect } from 'next/navigation';

interface Props {
  params: {
    brand: string;
  };
  searchParams: {
    page?: string;
  };
}

export default async function GenderByPage({ params, searchParams }: Props) {
  const { brand } = params;

  const page = searchParams.page ? parseInt(searchParams.page) : 1;

  const { products, totalPages } = await getPaginatedProductsWithImages({
    page,
    brand,
  });

  if (products.length === 0) {
    redirect(`/brand/${brand}`);
  }

  //Arreglar las etiquetas
  const labels: Record<string, string> = {
    men: 'para Hombres',
    women: 'para Mujeres',
    kid: 'para Niños',
    unisex: 'para todos',
  };

  const subtitle: Record<string, string> = {
    men: 'Todos los productos para él',
    women: 'Todos los productos para ella',
    kid: 'Todos los productos para más pequeños',
    unisex: 'Todos los productos para todos',
  };

  return (
    <>
      <Title
        title={`Articulos ${labels[brand]}`}
        subtitle={subtitle[brand]}
        className="mb-2"
      />
      <ProductGrid products={products} />

      <Pagination totalPages={totalPages} />
    </>
  );
}
