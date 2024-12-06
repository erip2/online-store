import CartItems from '@/components/cart-items';
import Container from '@/components/container';

export default function Cart() {
  return (
    <main className='bg-light-grey pb-20 text-black'>
      <Container>
        <h1 className='mb-12 pt-16 font-clash text-4xl'>Your Shopping cart</h1>
        <CartItems />
      </Container>
    </main>
  );
}
