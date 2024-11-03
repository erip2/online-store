'use client';

import Button from '@/components/button';
import Container from '@/components/container';
import Filters from '@/components/filters';
import { Product } from '@/components/new-products';
import ProductList from '@/components/product-list';
import useProductFilters from '@/app/lib/utils/useProductFilters';
import { useState } from 'react';

interface ProductListContainerProps {
  products: Product[];
  brands: string[];
}

export default function ProductListContainer({
  products,
  brands,
}: ProductListContainerProps) {
  const {
    filteredProducts,
    triggerPriceFilter,
    triggerBrandFilter,
    triggerSorting,
  } = useProductFilters(products);

  const [showFilters, setShowFilters] = useState(false);
  const [showSorting, setShowSorting] = useState(false);

  const test = (e: any) => {
    triggerSorting(e.target.value, 'asc');
  };

  return (
    <Container className='bg-white md:grid md:grid-cols-4 md:py-9'>
      <div className='grid grid-cols-2 gap-x-4 px-6 pt-5 md:hidden'>
        <Button
          variant='secondary'
          iconRight
          onClick={() => setShowFilters(!showFilters)}
        >
          Filters
        </Button>
        <Button
          variant='secondary'
          iconRight
          onClick={() => setShowSorting(!showSorting)}
        >
          Sorting
        </Button>
      </div>
      <div className='flex flex-col'>
        <div className={`${showFilters ? 'block' : 'hidden'} md:block`}>
          <Filters
            brands={brands}
            onPriceRangeChange={triggerPriceFilter}
            onBrandSelect={triggerBrandFilter}
          />
        </div>
        <div
          className={`${showSorting ? 'block' : 'hidden'} mt-5 px-6 text-black md:block lg:px-0`}
        >
          <select name='selectedFruit' onChange={test}>
            <option value='price'>Sort by Price</option>
            <option value='title'>Sort by Title</option>
            <option value='asc'>Sort by Asc</option>
            <option value='desc'>Sort by Desc</option>
          </select>
        </div>
      </div>
      <main className='grid grid-cols-2 gap-x-4 gap-y-5 px-6 text-black md:col-span-3 md:gap-x-5 xl:grid-cols-3'>
        <ProductList products={filteredProducts} />
      </main>
    </Container>
  );
}
