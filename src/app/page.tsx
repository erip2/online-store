import BrandDifferent from '@/components/brand-different';
import Container from '@/components/container';
import HeroBlock from '@/components/hero-block';
import NewProducts from '@/components/new-products';
import NewsLetter from '@/components/newsletter';
import PopularProducts from '@/components/popular-products';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between bg-white'>
      <Container>
        <HeroBlock />
        <BrandDifferent />
        <NewProducts />
        <PopularProducts />
      </Container>
      <NewsLetter />
    </main>
  );
}
