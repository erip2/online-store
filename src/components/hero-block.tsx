import Link from 'next/link';
import Button from '@/components/button';
import Image from 'next/image';

export default function HeroBlock() {
  return (
    <section className='w-full bg-dark-primary md:gap-x-14 lg:flex lg:justify-between xl:gap-x-24'>
      <div className='px-6 pb-6 pt-10 lg:grid lg:basis-2/3 lg:grid-rows-3 lg:items-start lg:p-[60px] lg:pr-0'>
        <h1 className='font-clash text-[32px] font-normal leading-loose lg:w-[500px]'>
          The furniture brand for the future, with timeless designs
        </h1>
        <p className='mb-8 mt-20 font-satoshi text-lg font-medium lg:row-start-3 lg:mb-0 lg:mt-auto lg:w-4/6'>
          A new era in eco friendly furniture with Avelon, the French luxury
          retail brand with nice fonts, tasteful colors and a beautiful way to
          display things digitally using modern web technologies.
        </p>
        <Button asChild variant='tertiary' className='w-full lg:w-fit'>
          <Link href='/shop'>View collection</Link>
        </Button>
      </div>
      <div className='hidden lg:block lg:basis-1/3'>
        <Image
          className='h-full w-full object-cover'
          src={'/images/chair.png'}
          alt='Hero'
          priority
          width={520}
          height={584}
        />
      </div>
    </section>
  );
}
