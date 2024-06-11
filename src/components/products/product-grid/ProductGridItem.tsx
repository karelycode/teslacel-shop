'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/interfaces';

interface Props {
  product: Product;
}

export const ProductGridItem = ({ product }: Props) => {
  const [displayImage, setDisplayImage] = useState(product.images[0]);

  // If the product has no images, return null
  if (product.images.length === 0) {
    return null;
  }
  const localsrc = displayImage
    ? displayImage.startsWith('http')
      ? displayImage
      : `/products/${displayImage}`
    : '/imgs/placeholder.jpg';

  return (
    <div className="rounded-md overflow-hidden fade-in">
      <div className=" w-[148px] h-[148px] md:w-[500px] md:h-[500px] flex justify-center items-center bg-gray-100">
        <Link href={`/product/${product.slug}`}>
          <Image
            src={localsrc}
            alt={product.title}
            className="object-cover rounded transition-all w-[148px] h-[148px] md:w-[300px] md:h-[360px]"
            width={300}
            height={300}
            onMouseEnter={() => setDisplayImage(product.images[1])}
            onMouseLeave={() => setDisplayImage(product.images[0])}
          />
        </Link>
      </div>
      <div className="p-4 flex flex-col">
        <Link href={`/product/${product.slug}`} className="hover:text-blue-600">
          {product.title}
        </Link>
        <span className="font-bold">$ {product.price}</span>
      </div>
    </div>
  );
};
