import BrandDifferent from '@/components/brand-different';
import Container from '@/components/container';
import HeroBlock from '@/components/hero-block';
import NewProducts from '@/components/new-products';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between bg-white'>
      <Container>
        <HeroBlock />
        <BrandDifferent />
        <NewProducts />
      </Container>
    </main>
  );
}
