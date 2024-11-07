import { Category } from '@/app/layout';
import Image from 'next/image';
import formatPrice from '@/app/lib/utils/formatPrice';
import Link from 'next/link';
import { titleToSlug } from '@/app/lib/utils/titleSlugUtils';
import Button from '@/components/button';

export interface Product {
  id: number;
  title: string;
  description: string;
  category: Category;
  images: string[];
  price: number;
  thumbnail: string;
  brand: string;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
}

export default async function NewProducts() {
  let data = await fetch(
    `${process.env.NEXT_PUBLIC_DUMMY_JSON_API_URL}/products?limit=4`
  );
  let response = await data.json();
  let products: Product[] = response.products;

  return (
    <section className='px-6 py-12 text-black lg:px-0'>
      <h3 className='mb-5 font-clash text-xl md:mb-8 md:text-[32px]'>
        New Products
      </h3>
      <div className='gap grid grid-cols-2 gap-x-4 gap-y-5 lg:grid-cols-4'>
        {products.map((product: Product) => (
          <Link
            href={`/product/${titleToSlug(product.title)}`}
            className='flex flex-col'
            key={product.id}
          >
            <Image
              src={product.images[0]}
              className='h-[200px] w-full object-cover md:h-[375px]'
              width={160}
              height={200}
              alt={product.title}
            />
            <span className='mb-2 mt-6 font-clash text-xl'>
              {product.title}
            </span>
            <span className='font-satoshi text-lg'>
              {formatPrice(product.price)}
            </span>
          </Link>
        ))}
      </div>
      <div className='flex justify-center'>
        <Button
          asChild
          variant='secondary'
          className='mt-8 flex w-full md:w-fit'
        >
          <Link href='/shop'>View collection</Link>
        </Button>
      </div>
    </section>
  );
}
