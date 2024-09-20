'use client';

import Button from '@/components/button';
import Spinner from '@/components/spinner';
import { createNewsLetterEmail } from '@/app/actions';
import { useFormState, useFormStatus } from 'react-dom';

const initialState = {
  message: '',
};

export default function NewsLetter() {
  const [state, formAction] = useFormState(createNewsLetterEmail, initialState);

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
        <form className='flex' action={formAction}>
          <input
            className='bg-light-grey pl-3 lg:w-80 lg:flex-1 lg:pl-8'
            type='email'
            name='email'
            placeholder='your@email.com'
          />
          <SubmitButton />
        </form>
        <p className='lg:text-md font-satoshi text-sm'>{state.message}</p>
      </div>
    </section>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button disabled={pending} className='flex items-center gap-x-3'>
      {'Sign up'}
      {pending && <Spinner />}
    </Button>
  );
}
