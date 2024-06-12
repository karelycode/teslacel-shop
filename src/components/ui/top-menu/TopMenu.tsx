'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { titleFont } from '@/config/fonts';
import { useCartStore, useUIStore } from '@/store';
import { IoCartOutline } from 'react-icons/io5';

export const TopMenu = () => {
  const openMenu = useUIStore((state) => state.openSideMenu);
  const totalItemsInCart = useCartStore((state) => state.getTotalItems());

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <nav className="bg-yellow-400 flex px-5 justify-between items-center w-full">
      {/* Logo */}
      <div>
        <Link href={'/'}>
          <span className={`${titleFont.className} antialiased font-bold`}>
            Teslacel
          </span>
          <span> | Shop</span>
        </Link>
      </div>

      {/* Center Menu */}
      <div className="hidden md:block">
        <Link
          className="m-2 p-2 text-black hover:text-pink-600"
          href={'/brand/Xiaomi'}
        >
          Xiaomi
        </Link>
        <Link
          className="m-2 p-2 text-black hover:text-pink-600"
          href={'/brand/Samsung'}
        >
          Samsung
        </Link>
        <Link
          className="m-2 p-2 text-black hover:text-pink-600"
          href={'/brand/Apple'}
        >
          Apple
        </Link>
        <Link
          className="m-2 p-2 text-black hover:text-pink-600"
          href={'/brand/Oppo'}
        >
          Oppo
        </Link>
        <Link
          className="m-2 p-2 text-black hover:text-pink-600"
          href={'/brand/Honor'}
        >
          Honor
        </Link>
        <Link
          className="m-2 p-2 text-black hover:text-pink-600"
          href={'/brand/Motorola'}
        >
          Motorola
        </Link>
        <Link
          className="m-2 p-2 text-black hover:text-pink-600"
          href={'/brand/Poco'}
        >
          Poco
        </Link>
        <Link
          className="m-2 p-2 text-black hover:text-pink-600"
          href={'/brand/Realme'}
        >
          Realme
        </Link>
      </div>

      {/* Search, Cart, Menu */}
      <div className="flex items-center">
        {/* <Link href={'/search'} className="mx-2">
          <IoSearchOutline className="w-5 h-5" />
        </Link> */}
        <Link
          href={totalItemsInCart === 0 && loaded ? '/empty' : '/cart'}
          className="mx-2"
        >
          <div className="relative">
            {loaded && totalItemsInCart > 0 && (
              <span className="absolute text-xs rounded-full px-1 font-bold -top-2 -right-2 bg-pink-600 text-white">
                {totalItemsInCart}
              </span>
            )}
            <IoCartOutline className="w-5 h-5 text-black hover:text-pink-600" />
          </div>
        </Link>
        <button
          onClick={openMenu}
          className="m-2 p-2 text-black hover:text-pink-600"
        >
          Menú
        </button>
      </div>
    </nav>
  );
};
