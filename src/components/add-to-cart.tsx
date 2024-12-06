'use client';

import { useState } from 'react';
import Button from '@/components/button';
import AmountInput from '@/components/amount-input';
import { useCart } from '@/context/cartContext';

interface AddToCartProps {
  productId: number;
}

export default function AddToCart({
  productId,
  ...props
}: AddToCartProps & React.HTMLAttributes<HTMLDivElement>) {
  const [amount, setAmount] = useState(1);
  const { addToCart } = useCart();

  const onAddToCart = () => {
    fetch(`${process.env.NEXT_PUBLIC_DUMMY_JSON_API_URL}/carts/add`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userId: 1,
        products: [
          {
            id: productId,
            quantity: amount,
          },
        ],
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        addToCart(data.products[0]);
      });
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
