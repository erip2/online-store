'use client';

import { useState } from 'react';
import Button from '@/components/button';
import Spinner from '@/components/spinner';

export default function NewsLetter() {
  const [email, setEmail] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [response, setResponse] = useState<string | null>(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    fetch(
      `${process.env.NEXT_PUBLIC_DUMMY_JSON_API_URL}/http/200/Thank%20you%20for%20signing%20up!?delay=1000`
    )
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setEmail('');
        setResponse(data.message);
      });
  };

  return (
    <section className='my-12 w-full pl-6 pr-9 text-black lg:bg-light-grey'>
      <div className='mx-16 my-14 flex flex-col items-center bg-white p-10 lg:pb-14 lg:pt-16'>
        <h4 className='font-clash text-xl lg:text-4xl'>
          Join the club and get the benefits
        </h4>
        <p className='lg:text-md mb-11 mt-4 font-satoshi text-sm leading-relaxed lg:mb-[72px] lg:max-w-96 lg:text-center'>
          Sign up for our newsletter and receive exclusive offers on new ranges,
          sales, pop up stores and more
        </p>
        <form className='flex'>
          <input
            className='flex-1 bg-light-grey pl-8 lg:w-80'
            type='email'
            value={email}
            placeholder='your@email.com'
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button
            onClick={handleSubmit}
            disabled={loading}
            className='flex items-center gap-x-3'
          >
            {'Sign up'}
            {loading && <Spinner />}
          </Button>
        </form>
        <p className='lg:text-md font-satoshi text-sm'>{response}</p>
      </div>
    </section>
  );
}
