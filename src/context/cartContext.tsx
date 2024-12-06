import { CartProduct } from '@/components/cart-items';
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';

interface CartContextProps {
  cart: CartProduct[];
  addToCart: (item: CartProduct) => void;
  removeFromCart: (id: number) => void;
  updateCartQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [isInitialized, setIsInitialized] = useState(false);
  const [cart, setCart] = useState<CartProduct[]>([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
        setCart(JSON.parse(savedCart));
      }
      setIsInitialized(true);
    }
  }, []);

  useEffect(() => {
    if (isInitialized && typeof window !== 'undefined') {
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }, [cart, isInitialized]);

  const addToCart = (item: CartProduct) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItemIndex > -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex] = {
          ...updatedCart[existingItemIndex],
          quantity: updatedCart[existingItemIndex].quantity + item.quantity,
        };

        return updatedCart;
      }

      return [...prevCart, item];
    });
  };

  const removeFromCart = (id: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const updateCartQuantity = (id: number, quantity: number) => {
    setCart((prevCart) => {
      if (quantity === 0) {
        return prevCart.filter((cartItem) => cartItem.id !== id);
      }
      return prevCart.map((cartItem) =>
        cartItem.id === id ? { ...cartItem, quantity: quantity } : cartItem
      );
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateCartQuantity, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
