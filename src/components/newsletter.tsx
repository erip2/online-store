import NewsLetterForm from '@/components/newsletter-form';

export default function NewsLetter() {
  return (
    <section className='my-12 w-full text-black lg:mb-0 lg:bg-light-grey lg:pl-6 lg:pr-9'>
      <div className='flex flex-col items-center bg-white p-10 lg:mx-16 lg:my-14 lg:pb-14 lg:pt-16'>
        <h4 className='font-clash text-xl lg:text-4xl'>
          Join the club and get the benefits
        </h4>
        <p className='lg:text-md mb-11 mt-4 font-satoshi text-sm leading-relaxed lg:mb-[72px] lg:max-w-96 lg:text-center'>
          Sign up for our newsletter and receive exclusive offers on new ranges,
          sales, pop up stores and more
        </p>
        <NewsLetterForm />
      </div>
    </section>
  );
}
