'use client';

import Link from 'next/link';
import Search from '@/icons/search';
import Menu from '@/icons/menu';
import { useEffect, useState } from 'react';
import { Category } from '@/app/layout';
import Cart from '@/icons/cart';
import { useCart } from '@/context/cartContext';
import { motion } from 'motion/react';

interface HeaderProps {
  categories: Category[];
}

export default function Header({ categories }: HeaderProps) {
  const [isOpen, setIsOpen] = useState<Boolean>(false);
  const { cart } = useCart();
  const [animateKey, setAnimateKey] = useState(0);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setAnimateKey((prevKey) => prevKey + 1);
  }, [cart.length]);

  return (
    <header className='w-full bg-white text-2xl text-black'>
      <div className='flex h-full items-center justify-between p-5'>
        <Link href='/' className='font-clash font-light'>
          Avion
        </Link>
        <div className='flex items-center gap-x-5'>
          <Link href='/cart' className='relative'>
            <Cart />
            {cart.length > 0 && (
              <motion.span
                key={animateKey}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className='absolute -right-2 -top-2 flex size-4 items-center justify-center rounded-full bg-black text-xs text-white'
              >
                {cart.length}
              </motion.span>
            )}
          </Link>
          <button type='button'>
            <Search />
          </button>
          <button type='button' onClick={toggleNav} className='md:hidden'>
            <Menu />
          </button>
        </div>
      </div>
      <div>
        {isOpen && (
          <nav className='bg-light-grey text-[#726E8D]'>
            <ul className='flex gap-x-[44px] overflow-scroll scroll-smooth whitespace-nowrap px-6 py-4 text-base'>
              <li key='all-products-mobile'>
                <Link href='/'>All Products</Link>
              </li>
              {categories.slice(0, 8).map((category: Category) => (
                <li key={`mobile-${category.slug}`}>
                  <Link href={`/category/${category.slug}`}>
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
      <hr className='mx-auto hidden h-px w-full rounded border-0 bg-gray-300 md:block' />
      <div className='hidden py-5 md:block'>
        <nav className='text-[#726E8D]'>
          <ul className='flex justify-center gap-x-[44px] whitespace-nowrap px-6 text-base'>
            <li key='all-products-desktop'>
              <Link href='/'>All Products</Link>
            </li>
            {categories.slice(0, 4).map((category: Category) => (
              <li key={`desktop-${category.slug}`}>
                <Link href={`/category/${category.slug}`}>{category.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
