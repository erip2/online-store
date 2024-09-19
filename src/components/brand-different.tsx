import BrandDifferentItem from '@/components/brand-different-item';
import Card from '@/icons/card';
import Check from '@/icons/check';
import Delivery from '@/icons/delivery';
import Eco from '@/icons/eco';
import { FC } from 'react';

interface Item {
  icon: FC;
  title: string;
  description: string;
}

const items: Item[] = [
  {
    icon: Delivery,
    title: 'Next day as standard',
    description: 'Order before 3pm and get your order the next day as standard',
  },
  {
    icon: Check,
    title: 'Made by true artisans',
    description:
      'Handmade crafted goods made with real passion and craftmanship',
  },
  {
    icon: Card,
    title: 'Unbeatable prices',
    description: 'We offer the best prices on the market',
  },
  {
    icon: Eco,
    title: 'Recycled packaging',
    description:
      'We use 100% recycled packaging to ensure our footprint is manageable',
  },
];

export default function BrandDifferent() {
  return (
    <section className='px-6 py-12 text-black lg:px-0'>
      <h3 className='mb-9 w-3/4 font-clash text-xl md:mb-12 md:w-full md:text-center'>
        What makes our brand different
      </h3>
      <div className='flex flex-col gap-x-4 gap-y-9 md:grid md:grid-cols-2 lg:flex lg:flex-row lg:gap-x-20'>
        {items.map((item: Item) => (
          <BrandDifferentItem key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
}
