'use client';

import { useState } from 'react';
import Button from './button';
import AmountInput from './amount-input';

interface AddToCartProps {
  productId: number;
}

export default function AddToCart({
  productId,
  ...props
}: AddToCartProps & React.HTMLAttributes<HTMLDivElement>) {
  const [amount, setAmount] = useState(1);

  const onAddToCart = () => {
    fetch(`${process.env.NEXT_PUBLIC_DUMMY_JSON_API_URL}/carts/1`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        products: [
          {
            id: productId,
            quantity: amount,
          },
        ],
      }),
    })
      .then((res) => res.json())
      .then(console.log);
  };

  return (
    <div {...props}>
      <div className='mb-4 space-y-3 lg:mb-0 lg:flex lg:items-center lg:justify-center lg:gap-x-5 lg:space-y-0'>
        <span>Amount</span>
        <AmountInput value={amount} onValueUpdate={(val) => setAmount(val)} />
      </div>
      <Button className='w-full lg:w-fit' onClick={onAddToCart}>
        Add to cart
      </Button>
    </div>
  );
}
