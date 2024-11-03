'use client';

import { CheckedState } from '@radix-ui/react-checkbox';
import Checkbox from '@/components/checkbox';

interface FiltersProps {
  onPriceRangeChange: (
    value: number | [number, number],
    checked: CheckedState
  ) => void;
  brands: string[];
  onBrandSelect: (value: string, checked: CheckedState) => void;
}

const priceOptions = [
  { label: '0 - 100', value: '0, 100' },
  { label: '101 - 250', value: '101, 250' },
  { label: '250+', value: '250' },
];

export default function Filters({
  onPriceRangeChange,
  brands,
  onBrandSelect,
}: FiltersProps) {
  const handlePriceRangeChange = (value: string, checked: CheckedState) => {
    const numbers = value.split(',').map(Number);

    const selectedValue =
      numbers.length === 1
        ? numbers[0]
        : ([numbers[0], numbers[1]] as [number, number]);

    onPriceRangeChange(selectedValue, checked);
  };

  return (
    <div className='space-y-12 px-6 text-black lg:px-0'>
      <div className='flex flex-col gap-y-5'>
        <span className='font-clash text-base'>Price</span>
        <ul className='flex flex-col gap-y-3'>
          {priceOptions.map(({ label, value }) => (
            <li key={value}>
              <Checkbox
                label={label}
                value={value}
                onChange={handlePriceRangeChange}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className='flex flex-col gap-y-5'>
        <span className='font-clash text-base'>Brands</span>
        <ul className='flex flex-col gap-y-3'>
          {brands.map((brand) => (
            <li key={brand}>
              <Checkbox label={brand} value={brand} onChange={onBrandSelect} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
