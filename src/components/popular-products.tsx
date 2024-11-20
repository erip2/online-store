import Image from 'next/image';
import { Product } from './new-products';
import Link from 'next/link';
import { titleToSlug } from '@/app/lib/utils/titleSlugUtils';
import formatPrice from '@/app/lib/utils/formatPrice';
import Button from './button';
import ProductCard from './product-card';

export default async function PopularProducts() {
  let data = await fetch(
    `${process.env.NEXT_PUBLIC_DUMMY_JSON_API_URL}/products?offset=4&limit=3`
  );
  let response = await data.json();
  let products: Product[] = response.products;

  return (
    <section className='py-12 pl-6 text-black lg:px-0'>
      <h3 className='mb-5 font-clash text-xl md:mb-8 md:text-[32px]'>
        Our Popular Products
      </h3>
      <div className='flex gap-x-3 overflow-scroll pr-6 md:grid md:grid-cols-4 md:overflow-auto lg:pr-0'>
        {products.map((product: Product) => (
          <ProductCard
            className='md:shrink md:first:col-span-2'
            product={product}
            key={product.id}
          />
        ))}
      </div>
      <div className='flex justify-center pr-6'>
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
