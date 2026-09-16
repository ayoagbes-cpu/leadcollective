"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { Product } from "./data";

type CartItem = {
  slug: string;
  title: string;
  price: number;
};

type CartContextValue = {
  items: CartItem[];
  add: (product: Product) => void;
  remove: (slug: string) => void;
  clear: () => void;
  count: number;
  total: number;
};

export { formatGBP, bundleTotal } from "./format";

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "lead-collective-cart";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    // One-time sync from localStorage on mount, after the server-rendered
    // (cart-empty) markup has hydrated, so client and server output match.
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      // eslint-disable-next-line react-hooks/set-state-in-effect -- external storage read, not derivable from props/state
      if (raw) setItems(JSON.parse(raw));
    } catch {
      // ignore malformed/unavailable storage
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // ignore unavailable storage
    }
  }, [items, hydrated]);

  const value = useMemo<CartContextValue>(() => {
    const total = items.reduce((sum, item) => sum + item.price, 0);
    return {
      items,
      add: (product: Product) =>
        setItems((prev) =>
          prev.some((i) => i.slug === product.slug)
            ? prev
            : [...prev, { slug: product.slug, title: product.title, price: product.price }]
        ),
      remove: (slug: string) => setItems((prev) => prev.filter((i) => i.slug !== slug)),
      clear: () => setItems([]),
      count: items.length,
      total,
    };
  }, [items]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
