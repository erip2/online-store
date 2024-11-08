'use client';

import { CartProvider } from '@/context/cartContext';

export default function CartContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <CartProvider>{children}</CartProvider>;
}
