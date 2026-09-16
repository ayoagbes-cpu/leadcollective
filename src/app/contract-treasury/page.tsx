"use client";

import { useState } from "react";
import { Eyebrow } from "@/components/eyebrow";
import { ProductCard } from "@/components/product-card";
import { CartBar } from "@/components/cart-bar";
import { products, productStages, productCategories } from "@/lib/data";
import { cn } from "@/lib/cn";

const filters = [...productStages, ...productCategories];

export default function ContractTreasuryPage() {
  const [filter, setFilter] = useState<string>("All");

  const filtered =
    filter === "All"
      ? products
      : products.filter((p) => p.stage === filter || p.category === filter);

  return (
    <div className="max-w-[1240px] mx-auto px-10 pt-16 pb-[110px]">
      <Eyebrow className="mb-[18px]">Template shop</Eyebrow>
      <h1
        className="font-serif font-light m-0 mb-[18px] text-ink"
        style={{ fontSize: "clamp(34px, 4.6vw, 52px)", lineHeight: 1.06, letterSpacing: "-0.02em" }}
      >
        The Contract Treasury
      </h1>
      <p className="text-[17px] leading-relaxed text-muted max-w-[34em] m-0 mb-10">
        Download, fill in the highlighted fields, send. Each template ships with a plain-English
        guidance note and a single-business licence.
      </p>

      <div className="flex gap-2.5 flex-wrap pb-7 border-b border-sand mb-9">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={cn(
              "text-[13px] px-4 py-[9px] rounded-full whitespace-nowrap border",
              filter === f
                ? "border-terracotta bg-blush text-terracotta-dark"
                : "border-border bg-transparent text-muted hover:bg-hover"
            )}
          >
            {f}
          </button>
        ))}
        <div className="ml-auto font-mono text-[11px] text-faint self-center">
          filter: {filter} · {filtered.length} templates
        </div>
      </div>

      <div className="grid gap-6" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
        {filtered.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>

      <CartBar />
    </div>
  );
}
