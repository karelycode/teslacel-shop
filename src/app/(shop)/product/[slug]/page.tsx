export const revalidate = 1080;

import { getProductBySlug } from '@/actions';
import {
  CharacteristicsList,
  ProductSlideshow,
  ProductSlideshowMobile,
  StockLabel,
} from '@/components';
import { titleFont } from '@/config/fonts';
import { Metadata, ResolvingMetadata } from 'next';
import { notFound, redirect } from 'next/navigation';
import { AddToCart } from './ui/AddToCart';

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const slug = params.slug;

  // fetch data
  const product = await getProductBySlug(slug);

  // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || [];

  return {
    title: product?.title ?? 'Producto no encontrado',
    description: product?.description ?? '',
    openGraph: {
      title: product?.title ?? 'Producto no encontrado',
      description: product?.description ?? '',
      images: [`${product?.images[1]}`],
    },
  };
}

export default async function ProductBySlug({ params }: Props) {
  const { slug } = params;
  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  // redirect if product has no images
  if (product.images.length === 0) {
    redirect('/');
  }

  const pares = product.characteristics
    .split(';')
    .map((par) => par.split(':').map((item) => item.trim()));

  return (
    <div className="mt-5 mb-20 grid grid-cols-1 md:grid-cols-2 gap-3 mx-auto">
      {/* slideshow */}
      <div className="col-span-1 md:col-span-1 max-w-[900px]">
        {/* Mobile Slideshow */}
        <ProductSlideshowMobile
          title={product.title}
          images={product.images}
          className="block md:hidden"
        />

        {/* Desktop Slideshow */}
        <ProductSlideshow
          title={product.title}
          images={product.images}
          className="hidden md:block"
        />
      </div>
      {/* detalles */}
      <div className="col-span-1 px-5 max-w-[800px]">
        <StockLabel slug={slug} />
        <h1 className={`${titleFont.className} antialiased font-bold text-xl`}>
          {product.title}
        </h1>{' '}
        <p className="text-lg mb-5">$ {product.price}</p>
        <AddToCart product={product} />
        {/* Descripción */}
        <h3 className="font-bold text-lg">Descripción</h3>
        <p className="font-light">{product.description}</p>
        {/* Características */}
        <h3 className="font-bold text-lg mt-5">Características</h3>
        <div className="md:ml-4 mt-2">
          <CharacteristicsList pares={pares} />
        </div>
      </div>
    </div>
  );
}
