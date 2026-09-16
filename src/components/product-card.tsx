"use client";

import Link from "next/link";
import type { Product } from "@/lib/data";
import { formatGBP, useCart } from "@/lib/cart";
import { Eyebrow } from "@/components/eyebrow";

export function ProductCard({ product }: { product: Product }) {
  const { add, items } = useCart();
  const inCart = items.some((i) => i.slug === product.slug);

  return (
    <div className="bg-paper border border-sand rounded-[4px] overflow-hidden flex flex-col">
      <Link
        href={`/contract-treasury/${product.slug}`}
        className="stripe-placeholder flex items-end p-3.5"
        style={{ aspectRatio: "4 / 3" }}
      >
        <div className="font-mono text-[10px] text-faint bg-paper px-2.5 py-1.5">
          {product.preview}
        </div>
      </Link>
      <div className="p-6 flex flex-col gap-2.5 flex-1">
        <Eyebrow className="text-[10px] tracking-[0.12em]">{product.stage}</Eyebrow>
        <Link href={`/contract-treasury/${product.slug}`}>
          <h3 className="font-serif font-normal text-[22px] leading-tight m-0 text-ink hover:text-terracotta-dark">
            {product.title}
          </h3>
        </Link>
        <p className="text-[14px] leading-snug text-muted m-0 flex-1">{product.blurb}</p>
        <div className="flex items-center justify-between gap-3 pt-2.5 border-t border-sand-line">
          <div className="font-serif text-[24px] text-ink">{formatGBP(product.price)}</div>
          <button
            onClick={() => add(product)}
            className="text-[13px] font-semibold px-[18px] py-[11px] rounded-full whitespace-nowrap border-0 bg-terracotta-dark text-[#FFF8F1] hover:bg-terracotta-deep disabled:opacity-60"
            disabled={inCart}
          >
            {inCart ? "In cart" : "Add to cart"}
          </button>
        </div>
      </div>
    </div>
  );
}
