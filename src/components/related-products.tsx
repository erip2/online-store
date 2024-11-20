import { Product } from '@/components/new-products';
import ProductCard from '@/components/product-card';

export default async function RelatedProducts() {
  let data = await fetch(
    `${process.env.NEXT_PUBLIC_DUMMY_JSON_API_URL}/products?limit=4`
  );
  let jsonData = await data.json();\
  let products: Product[] = jsonData.products;

  return (
    <div className='gap grid grid-cols-2 gap-x-4 gap-y-5 lg:grid-cols-4'>
      {products.map((product: Product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
}
