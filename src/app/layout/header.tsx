'use client';

import Link from 'next/link';
import Search from '@/icons/search';
import Menu from '@/icons/menu';
import { useState } from 'react';

interface Category {
  id: number;
  name: string;
}

interface HeaderProps {
  categories: Category[];
}

export default function Header({ categories }: HeaderProps) {
  const [isOpen, setIsOpen] = useState<Boolean>(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className='w-full bg-white text-2xl text-black'>
      <div className='flex h-full items-center justify-between p-5'>
        <Link href='/' className='font-clash font-light'>
          Avion
        </Link>
        <div className='flex items-center gap-x-5'>
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
              <li>
                <Link href='/'>All Products</Link>
              </li>
              {categories.map((category: Category) => (
                <li key={category.id}>
                  <Link href={`/category/${category.id}`}>{category.name}</Link>
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
            <li>
              <Link href='/'>All Products</Link>
            </li>
            {categories.map((category: Category) => (
              <li key={category.id}>
                <Link href={`/category/${category.id}`}>{category.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}