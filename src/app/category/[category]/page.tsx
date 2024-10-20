import { slugToTitle } from '@/app/lib/utils/titleSlugUtils';
import { Product } from '@/components/new-products';
import ProductListContainer from '@/components/product-list-container';
import Image from 'next/image';

interface CategoryProps {
  params: {
    category: string;
  };
}

export default async function Category({ params }: CategoryProps) {
  const { category } = params;

  let data = await fetch(
    `${process.env.NEXT_PUBLIC_DUMMY_JSON_API_URL}/products/category/${category}`
  );
  let response = await data.json();
  let products: Product[] = response.products;

  const brands = products.map((product) => product.brand);
  const uniqueBrands = Array.from(new Set(brands));

  return (
    <>
      <div className='relative'>
        <Image
          className='h-[146px] w-full'
          src='/images/stool.png'
          alt={slugToTitle(category)}
          width={1667}
          height={242}
          priority
        />
        <h1 className='absolute left-1/2 top-1/2 -translate-x-1/2 font-clash text-4xl lg:bottom-9 lg:left-20 lg:translate-x-0'>
          {slugToTitle(category)}
        </h1>
      </div>
      <ProductListContainer products={products} brands={uniqueBrands} />
    </>
  );
}
