import formatPrice from '@/app/lib/utils/formatPrice';
import AddToCart from '@/components/add-to-cart';
import Button from '@/components/button';
import { Product } from '@/components/new-products';
import Image from 'next/image';

interface ProductProps {
  params: {
    product: number;
  };
}

export default async function Product({ params }: ProductProps) {
  const { product } = params;

  let data = await fetch(
    `${process.env.NEXT_PUBLIC_DUMMY_JSON_API_URL}/products/${product}`
  );
  let response: Product = await data.json();

  return (
    <main className='bg-white text-black'>
      <div className='flex flex-col lg:flex-row lg:items-center'>
        <div className='mb-7 w-full lg:w-1/2'>
          <Image
            src={response.images[0]}
            alt={response.title}
            width={721}
            height={759}
          />
        </div>
        <div className='px-6 font-clash lg:w-1/2'>
          <h1 className='mb-3 text-2xl lg:text-4xl'>{response.title}</h1>
          <span className='font-satoshi text-xl lg:text-2xl'>
            {formatPrice(response.price)}
          </span>
          <div className='mt-7 space-y-3 lg:w-2/3 lg:text-base'>
            <p>Description</p>
            <p>{response.description}</p>
          </div>
          <div className='mt-7 lg:w-[inherit]'>
            <p className='mb-4 text-base'>Dimensions</p>
            <div className='flex justify-between divide-x lg:gap-x-[57px] lg:divide-x-0'>
              <div className='flex w-full flex-col gap-y-[15px] lg:w-[inherit] lg:justify-between'>
                <span className='text-sm'>Height</span>
                <span className='font-satoshi'>
                  {response.dimensions.height}cm
                </span>
              </div>
              <div className='flex w-full flex-col items-center gap-y-[15px] lg:w-[inherit] lg:justify-between'>
                <span>Width</span>
                <span className='font-satoshi'>
                  {response.dimensions.width}cm
                </span>
              </div>
              <div className='flex w-full flex-col items-end gap-y-[15px] lg:w-[inherit] lg:justify-between'>
                <span>Depth</span>
                <span className='font-satoshi'>
                  {response.dimensions.depth}cm
                </span>
              </div>
            </div>
          </div>
          <AddToCart
            className='mb-12 mt-8 lg:flex lg:w-[460px] lg:items-start lg:justify-between'
            productId={product}
          />
        </div>
      </div>
    </main>
  );
}
