import { FC } from 'react';

interface Item {
  icon: FC;
  title: string;
  description: string;
}

interface BrandDifferentItemProps {
  item: Item;
}

export default function BrandDifferentItem({ item }: BrandDifferentItemProps) {
  return (
    <div className='flex flex-col'>
      <item.icon />
      <span className='mt-4 font-clash'>{item.title}</span>
      <span className='font-satoshi mt-3'>{item.description}</span>
    </div>
  );
}
