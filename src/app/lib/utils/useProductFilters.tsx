import { Product } from '@/components/new-products';
import { CheckedState } from '@radix-ui/react-checkbox';
import { useState, useEffect, useCallback } from 'react';

type SortField = 'title' | 'price';
type SortDirection = 'asc' | 'desc';

interface SortConfig {
  field: SortField;
  direction: SortDirection;
}

const useProductFilters = (products: Product[]) => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [activeFilters, setActiveFilters] = useState({
    priceRanges: [] as (number | [number, number])[],
    brands: [] as string[],
  });
  const [sortConfig, setSortConfig] = useState<SortConfig | null>(null);

  const applyFilters = useCallback(() => {
    let updatedProducts = [...products];

    if (activeFilters.priceRanges.length > 0) {
      updatedProducts = updatedProducts.filter((product) =>
        activeFilters.priceRanges.some((rangeOrValue) => {
          if (Array.isArray(rangeOrValue)) {
            const [min, max] = rangeOrValue;
            return product.price >= min && product.price <= max;
          } else {
            return product.price >= rangeOrValue;
          }
        })
      );
    }

    if (activeFilters.brands.length > 0) {
      updatedProducts = updatedProducts.filter((product) =>
        activeFilters.brands.includes(product.brand)
      );
    }

    if (sortConfig) {
      updatedProducts.sort((a, b) => {
        const { field, direction } = sortConfig;
        let comparison = 0;

        if (field === 'title') {
          comparison = a.title.localeCompare(b.title);
        } else if (field === 'price') {
          comparison = a.price - b.price;
        }

        return direction === 'asc' ? comparison : -comparison;
      });
    }

    setFilteredProducts(updatedProducts);
  }, [activeFilters, products, sortConfig]);

  useEffect(() => {
    applyFilters();
  }, [applyFilters]);

  const triggerPriceFilter = (
    priceValue: number | [number, number],
    checked: CheckedState
  ) => {
    setActiveFilters((prevFilters) => {
      const newPriceRanges = checked
        ? [...prevFilters.priceRanges, priceValue]
        : prevFilters.priceRanges.filter((rangeOrValue) => {
            if (Array.isArray(rangeOrValue) && Array.isArray(priceValue)) {
              return (
                rangeOrValue[0] !== priceValue[0] ||
                rangeOrValue[1] !== priceValue[1]
              );
            }
            return rangeOrValue !== priceValue;
          });

      return { ...prevFilters, priceRanges: newPriceRanges };
    });
  };

  const triggerBrandFilter = (brand: string, checked: CheckedState) => {
    setActiveFilters((prevFilters) => {
      const newBrands = checked
        ? [...prevFilters.brands, brand]
        : prevFilters.brands.filter((b) => b !== brand);
      return { ...prevFilters, brands: newBrands };
    });
  };

  const triggerSorting = (field: SortField, direction: SortDirection) => {
    setSortConfig({ field, direction });
  };

  const clearSort = () => {
    setSortConfig(null);
  };

  return {
    filteredProducts,
    triggerPriceFilter,
    triggerBrandFilter,
    triggerSorting,
    clearSort,
    currentSort: sortConfig,
  };
};

export default useProductFilters;
