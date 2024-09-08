import Link from 'next/link';
import Button from '@/components/button';

export default function HeroBlock() {
  return (
    <section className='w-full bg-dark-primary px-6 pb-6 pt-10'>
      <h1 className='font-clash text-[32px] font-light leading-loose'>
        The furniture brand for the future, with timeless designs
      </h1>
      <p className='mb-8 mt-20 text-lg'>
        A new era in eco friendly furniture with Avelon, the French luxury
        retail brand with nice fonts, tasteful colors and a beautiful way to
        display things digitally using modern web technologies.
      </p>
      <Button asChild variant='tertiary' className='w-full'>
        <Link href='/shop'>View Collection</Link>
      </Button>
    </section>
  );
}
