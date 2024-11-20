'use client';

import Link from 'next/link';
import { Product } from './new-products';
import Image from 'next/image';
import formatPrice from '@/app/lib/utils/formatPrice';

interface ProductListProps {
  products: Product[];
}

export default function ProductList({ products }: ProductListProps) {
  return (
    <>
      {products.map((product: Product) => (
        <Link
          href={`/product/${product.id}`}
          key={product.id}
          className='flex flex-col'
        >
          <Image
            className='object-cover md:h-[375px] md:w-[305px]'
            src={product.thumbnail}
            alt={product.title}
            width={163}
            height={200}
          />
          <span className='mb-2 mt-6 font-clash text-xl'>{product.title}</span>
          <span className='font-satoshi text-lg'>
            {formatPrice(product.price)}
          </span>
        </Link>
      ))}
    </>
  );
}
