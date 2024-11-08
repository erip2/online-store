import type { Metadata } from 'next';
import './globals.css';
import localFont from 'next/font/local';
import Header from '@/app/layout/header';
import Footer from '@/app/layout/footer';
import CartContextProvider from '@/components/cart-context-provider';

const ClashDisplay = localFont({
  src: [
    {
      path: '../../public/fonts/ClashDisplay-Medium.otf',
      weight: '500',
    },
    {
      path: '../../public/fonts/ClashDisplay-Light.otf',
      weight: '300',
    },
    {
      path: '../../public/fonts/ClashDisplay-Regular.otf',
      weight: '400',
    },
  ],
  display: 'swap',
  variable: '--font-clash-display',
});

const Satoshi = localFont({
  src: [
    {
      path: '../../public/fonts/Satoshi-Medium.otf',
      weight: '500',
    },
  ],
  display: 'swap',
  variable: '--font-satoshi',
});

export const metadata: Metadata = {
  title: 'Online Store',
  description: 'Fake Online Store',
};

export interface Category {
  slug: string;
  name: string;
  url: string;
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let data = await fetch(
    `${process.env.NEXT_PUBLIC_DUMMY_JSON_API_URL}/products/categories`
  );
  let categories: Category[] = await data.json();

  return (
    <html lang='en'>
      <body className={`${ClashDisplay.variable} ${Satoshi.variable}`}>
        <CartContextProvider>
          <Header categories={categories} />
          {children}
          <Footer categories={categories} />
        </CartContextProvider>
      </body>
    </html>
  );
}
