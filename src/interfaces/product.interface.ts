export interface Product {
  id: string;
  description: string;
  characteristics: string;
  images: string[];
  inStock: number;
  price: number;
  slug: string;
  title: string;
  brand: BrandCategory;
}

export interface CartProduct {
  id: string;
  slug: string;
  title: string;
  price: number;
  quantity: number;
  image: string;
  brand: BrandCategory;
}

export interface ProductImage {
  id: number;
  url: string;
}

export type BrandCategory =
  | 'Xiaomi'
  | 'Samsung'
  | 'Apple'
  | 'Honor'
  | 'Motorola'
  | 'Realme';
