import { titleToSlug } from '@/app/lib/utils/titleSlugUtils';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from './new-products';
import formatPrice from '@/app/lib/utils/formatPrice';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product, ...props }: ProductCardProps) {
  return (
    <Link
      href={`/product/${titleToSlug(product.title)}`}
      className='flex flex-col'
      key={product.id}
      {...props}
    >
      <Image
        src={product.images[0]}
        className='h-[250px] w-full object-cover md:h-[375px]'
        width={200}
        height={338}
        alt={product.title}
      />
      <span className='mb-2 mt-6 font-clash text-xl'>{product.title}</span>
      <span className='font-satoshi text-lg'>{formatPrice(product.price)}</span>
    </Link>
  );
}
