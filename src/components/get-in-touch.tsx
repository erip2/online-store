import Image from 'next/image';
import Button from '@/components/button';

export default function GetInTouch() {
  return (
    <section className='text-dark-primary md:flex'>
      <div className='px-6 md:mb-6 md:flex md:w-1/2 md:flex-col md:justify-between md:px-24 md:pb-14 md:pt-16'>
        <div className='lg:w-4/5'>
          <h4 className='mb-3 font-clash text-xl md:mb-8 md:text-2xl'>
            From a studio in London to a global brand with over 400 outlets
          </h4>
          <div className='font-satoshi text-sm leading-relaxed text-[#505977] md:text-base'>
            <p>
              When we started Avion, the idea was simple. Make high quality
              furniture affordable and available for the mass market.
            </p>
            <br />
            <p>
              Handmade, and lovingly crafted furniture and homeware is what we
              live, breathe and design so our Chelsea boutique become the hotbed
              for the London interior design community.
            </p>
          </div>
        </div>
        <Button
          variant='secondary'
          className='mb-9 mt-16 w-full md:mb-0 md:w-fit'
        >
          Get in touch
        </Button>
      </div>
      <div className='md:w-1/2'>
        <Image
          src={'/images/couch.png'}
          width={500}
          height={500}
          alt='Couch'
          className='h-full w-full object-cover'
        />
      </div>
    </section>
  );
}
