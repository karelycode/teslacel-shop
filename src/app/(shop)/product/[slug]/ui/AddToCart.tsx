'use client';

import { useState } from 'react';

import { QuantitySelector } from '@/components';
import { CartProduct, Product } from '@/interfaces';
import { useCartStore } from '@/store';

interface Props {
  product: Product;
}

export const AddToCart = ({ product }: Props) => {
  const addProductToCart = useCartStore((state) => state.addProductToCart);

  const [quantity, setQuantity] = useState<number>(1);
  const [posted, setPosted] = useState(false);

  const addToCart = () => {
    const cartProduct: CartProduct = {
      id: product.id,
      slug: product.slug,
      title: product.title,
      price: product.price,
      quantity,
      brand: product.brand,
      image: product.images[0],
    };
    addProductToCart(cartProduct);

    setPosted(false);
    setQuantity(1);
  };

  return (
    <>
      {/* Selector de cantidad */}
      <QuantitySelector quantity={quantity} onQuantitychanged={setQuantity} />

      {/* Button */}
      <button onClick={addToCart} className="btn-primary my-5">
        Agregar al carrito
      </button>
    </>
  );
};
