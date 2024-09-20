import Image from 'next/image';
import { Product } from './new-products';
import Link from 'next/link';
import titleToSlug from '@/app/lib/utils/titleToSlug';
import formatPrice from '@/app/lib/utils/formatPrice';
import Button from './button';

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
          <Link
            href={`/product/${titleToSlug(product.title)}`}
            className='flex shrink-0 flex-col md:shrink md:first:col-span-2'
            key={product.id}
          >
            <Image
              src={product.images[0]}
              className='h-[250px] w-full object-cover md:h-[375px]'
              width={200}
              height={338}
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
