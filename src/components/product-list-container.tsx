'use client';

import Button from '@/components/button';
import Container from '@/components/container';
import Filters from '@/components/filters';
import { Product } from '@/components/new-products';
import ProductList from '@/components/product-list';
import useProductFilters from '@/app/lib/utils/useProductFilters';

interface ProductListContainerProps {
  products: Product[];
  brands: string[];
}

export default function ProductListContainer({
  products,
  brands,
}: ProductListContainerProps) {
  const { filteredProducts, triggerPriceFilter, triggerBrandFilter } =
    useProductFilters(products);

  return (
    <Container className='bg-white md:grid md:grid-cols-4 md:py-9'>
      <div className='grid grid-cols-2 gap-x-4 px-6 pt-5 md:hidden'>
        <Button variant='secondary' iconRight>
          Filters
        </Button>
        <Button variant='secondary' iconRight>
          Sorting
        </Button>
      </div>
      <Filters
        brands={brands}
        onPriceRangeChange={triggerPriceFilter}
        onBrandSelect={triggerBrandFilter}
      />
      <main className='grid grid-cols-2 gap-x-4 gap-y-5 px-6 text-black md:col-span-3 md:gap-x-5 xl:grid-cols-3'>
        <ProductList products={filteredProducts} />
      </main>
    </Container>
  );
}
