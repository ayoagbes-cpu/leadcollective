"use client";

import { useState } from "react";
import { useCart, formatGBP, bundleTotal } from "@/lib/cart";
import { Eyebrow } from "@/components/eyebrow";

export function CartBar() {
  const { items, count, clear } = useCart();
  const [confirmed, setConfirmed] = useState(false);

  if (count === 0 && !confirmed) return null;

  if (confirmed) {
    return (
      <div className="mt-10 flex gap-6 flex-wrap items-center bg-paper border border-sand rounded-[4px] px-[30px] py-[26px]">
        <Eyebrow>Order confirmed</Eyebrow>
        <div className="text-[15px] text-muted flex-1 min-w-[220px]">
          Check your email — instant downloads are on their way, with a permanent copy saved to
          your library.
        </div>
        <button
          onClick={() => setConfirmed(false)}
          className="text-[15px] font-semibold px-7 py-[15px] rounded-full whitespace-nowrap border-0 bg-umber text-paper hover:bg-ink"
        >
          Continue browsing
        </button>
      </div>
    );
  }

  const total = bundleTotal(count, items);
  const saving = items.reduce((sum, i) => sum + i.price, 0) - total;

  return (
    <div className="mt-10 flex gap-6 flex-wrap items-center bg-paper border border-sand rounded-[4px] px-[30px] py-[26px]">
      <Eyebrow>
        Cart · {count} {count === 1 ? "document" : "documents"} · {formatGBP(total)}
      </Eyebrow>
      <div className="text-[15px] text-muted flex-1 min-w-[220px]">
        Instant download on payment, plus a permanent copy in your library. Bundle any three
        documents and the third is half price.
        {saving > 0 && (
          <span className="text-terracotta-dark font-semibold"> You&rsquo;re saving {formatGBP(saving)}.</span>
        )}
      </div>
      <button
        onClick={() => {
          setConfirmed(true);
          clear();
        }}
        className="text-[15px] font-semibold px-7 py-[15px] rounded-full whitespace-nowrap border-0 bg-umber text-paper hover:bg-ink"
      >
        Checkout
      </button>
    </div>
  );
}
