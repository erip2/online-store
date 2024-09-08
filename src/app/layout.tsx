import type { Metadata } from 'next';
import './globals.css';
import localFont from 'next/font/local';
import Header from '@/app/layout/header';

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

interface Category {
  id: number;
  name: string;
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let data = await fetch(
    `${process.env.NEXT_PUBLIC_PLATZKI_FAKE_STORE_API_URL}/categories`
  );
  let categories: Category[] = await data.json();

  return (
    <html lang='en'>
      <body className='font-clash'>
        <Header categories={categories} />
        {children}
      </body>
    </html>
  );
}
