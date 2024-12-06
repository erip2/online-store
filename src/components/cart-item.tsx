import formatPrice from '@/app/lib/utils/formatPrice';
import Image from 'next/image';
import { CartProduct } from './cart-items';
import { useState } from 'react';
import AmountInput from './amount-input';
import { useCart } from '@/context/cartContext';

type CartItemProps = {
  item: CartProduct;
};

export default function CartItem({ item }: CartItemProps) {
  const [quantity, setQuantity] = useState(item.quantity);
  const { updateCartQuantity } = useCart();

  const handleValueUpdate = (value: number) => {
    setQuantity(value);
    updateCartQuantity(item.id, value);
  };

  return (
    <tr>
      <td>
        <div className='flex items-center py-5'>
          <Image
            src={item.thumbnail}
            width={109}
            height={134}
            alt={item.title}
          />
          <div className='flex flex-col gap-y-2'>
            <span className='text-xl'>{item.title}</span>
            <span className='font-satoshi'>{formatPrice(item.price)}</span>
          </div>
        </div>
      </td>
      <td className='font-satoshi'>
        <AmountInput
          value={quantity}
          onValueUpdate={handleValueUpdate}
          className='w-36 px-0 lg:px-0'
        />
      </td>
      <td className='font-satoshi text-lg'>
        {formatPrice(item.price * quantity)}
      </td>
    </tr>
  );
}
