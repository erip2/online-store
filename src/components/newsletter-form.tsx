'use client';

import { createNewsLetterEmail } from '@/app/actions';
import cn from '@/app/lib/utils/cn';
import Button from '@/components/button';
import Spinner from '@/components/spinner';
import { cva } from 'class-variance-authority';
import { createContext, useContext } from 'react';
import { useFormState, useFormStatus } from 'react-dom';

const initialState: { message: string } = {
  message: '',
};

const inputVariants = cva('bg-light-grey pl-3 lg:w-80 flex-1 lg:pl-8', {
  variants: {
    variant: {
      primary: 'bg-light-grey',
      secondary: 'bg-primary/15',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

const buttonVariants = cva('flex items-center gap-x-3', {
  variants: {
    variant: {
      primary: 'bg-dark-primary text-white',
      secondary: 'bg-white text-dark-primary',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

interface NewsLetterFormProps {
  variant?: 'primary' | 'secondary';
}

const VariantContext = createContext<NewsLetterFormProps['variant']>('primary');

export default function NewsLetterForm({
  variant = 'primary',
}: NewsLetterFormProps) {
  const [state, formAction] = useFormState(createNewsLetterEmail, initialState);

  return (
    <>
      <form className='flex' action={formAction}>
        <VariantContext.Provider value={variant}>
          <input
            className={cn(inputVariants({ variant }))}
            type='email'
            name='email'
            placeholder='your@email.com'
          />
          <SubmitButton />
        </VariantContext.Provider>
      </form>
      <p className='lg:text-md font-satoshi text-sm'>{state.message}</p>
    </>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  const variant = useContext(VariantContext);

  return (
    <Button disabled={pending} className={cn(buttonVariants({ variant }))}>
      {'Sign up'}
      {pending && <Spinner />}
    </Button>
  );
}
