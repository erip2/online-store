'use client';

import formatPrice from '@/app/lib/utils/formatPrice';
import Button from './button';
import CartItem from './cart-item';
import { useCart } from '@/context/cartContext';

export type CartProduct = {
  discountPercentage: number;
  discountedPrice: number;
  id: number;
  price: number;
  quantity: number;
  thumbnail: string;
  title: string;
  total: number;
};

export default function CartItems() {
  const { cart } = useCart();

  return (
    <div>
      <table className='mb-2 w-full border-b py-12'>
        <thead>
          <tr className='mb-3 border-b text-left font-clash text-sm'>
            <th className='pb-3'>Product</th>
            <th className='pb-3'>Quantity</th>
            <th className='pb-3'>Total</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) => (
            <CartItem item={item} key={index} />
          ))}
        </tbody>
      </table>
      <div className='flex flex-col items-end'>
        <div className='mt-7 flex items-center justify-end gap-x-3'>
          <span className='font-clash text-xl font-thin'>Subtotal</span>
          <span className='font-clash text-2xl'>
            {formatPrice(
              cart.reduce((acc, item) => acc + item.total * item.quantity, 0)
            )}
          </span>
        </div>
        <span className='font-satoshi text-sm font-thin'>
          Taxes and shipping are calculated at checkout
        </span>
        <div className='mt-4'>
          <Button>Go to checkout</Button>
        </div>
      </div>
    </div>
  );
}
