"use client";

import type { Product } from "@/lib/data";
import { useCart } from "@/lib/cart";

export function AddToCartButton({ product }: { product: Product }) {
  const { add, items } = useCart();
  const inCart = items.some((i) => i.slug === product.slug);

  return (
    <button
      onClick={() => add(product)}
      disabled={inCart}
      className="text-[15px] font-semibold px-[30px] py-4 rounded-full whitespace-nowrap border-0 bg-terracotta-dark text-[#FFF8F1] hover:bg-terracotta-deep disabled:opacity-60"
    >
      {inCart ? "In cart" : "Add to cart"}
    </button>
  );
}
