"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Eyebrow } from "@/components/eyebrow";
import { ProductCard } from "@/components/product-card";
import { CartBar } from "@/components/cart-bar";
import { products, audiences, productStages, productCategories, type Audience } from "@/lib/data";
import { cn } from "@/lib/cn";

const typeFilters = [...productStages.filter((s) => s !== "All"), ...productCategories];

function audienceOf(filter: (typeof audiences)[number]): Audience | null {
  if (filter === "For Founders") return "Founders";
  if (filter === "For Boards & Trustees") return "Boards & Trustees";
  return null;
}

function ShopContent() {
  const searchParams = useSearchParams();
  const initialAudience =
    searchParams.get("audience") === "boards" ? "For Boards & Trustees" : "All";

  const [audience, setAudience] = useState<(typeof audiences)[number]>(initialAudience);
  const [type, setType] = useState<string>("All");

  const selectedAudience = audienceOf(audience);
  const filtered = products.filter((p) => {
    if (selectedAudience && p.audience !== selectedAudience) return false;
    if (type !== "All" && p.stage !== type && p.category !== type) return false;
    return true;
  });

  const showTypeRow = audience !== "For Boards & Trustees";

  return (
    <div className="max-w-[1240px] mx-auto px-10 pt-16 pb-[110px]">
      <Eyebrow className="mb-[18px]">Shop</Eyebrow>
      <h1
        className="font-serif font-light m-0 mb-[18px] text-ink"
        style={{ fontSize: "clamp(34px, 4.6vw, 52px)", lineHeight: 1.06, letterSpacing: "-0.02em" }}
      >
        The Contract Treasury &amp; Governance Toolkit
      </h1>
      <p className="text-[17px] leading-relaxed text-muted max-w-[34em] m-0 mb-10">
        Download, fill in the highlighted fields, send. Two collections — legal templates for
        founders, and governance templates for boards and trustees — each with a plain-English
        guidance note and a single-organisation licence.
      </p>

      <div className="flex gap-2.5 flex-wrap mb-5">
        {audiences.map((a) => (
          <button
            key={a}
            onClick={() => {
              setAudience(a);
              setType("All");
            }}
            className={cn(
              "text-[13px] font-semibold px-4 py-[9px] rounded-full whitespace-nowrap border",
              audience === a
                ? "border-terracotta-dark bg-terracotta-dark text-[#FFF8F1]"
                : "border-border bg-transparent text-umber hover:bg-hover"
            )}
          >
            {a}
          </button>
        ))}
      </div>

      {showTypeRow && (
        <div className="flex gap-2.5 flex-wrap pb-7 border-b border-sand mb-9">
          <button
            onClick={() => setType("All")}
            className={cn(
              "text-[13px] px-4 py-[9px] rounded-full whitespace-nowrap border",
              type === "All"
                ? "border-terracotta bg-blush text-terracotta-dark"
                : "border-border bg-transparent text-muted hover:bg-hover"
            )}
          >
            All types
          </button>
          {typeFilters.map((f) => (
            <button
              key={f}
              onClick={() => setType(f)}
              className={cn(
                "text-[13px] px-4 py-[9px] rounded-full whitespace-nowrap border",
                type === f
                  ? "border-terracotta bg-blush text-terracotta-dark"
                  : "border-border bg-transparent text-muted hover:bg-hover"
              )}
            >
              {f}
            </button>
          ))}
          <div className="ml-auto font-mono text-[11px] text-faint self-center">
            {filtered.length} templates
          </div>
        </div>
      )}
      {!showTypeRow && (
        <div className="pb-7 mb-9 border-b border-sand font-mono text-[11px] text-faint">
          {filtered.length} templates
        </div>
      )}

      <div className="grid gap-6" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
        {filtered.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>

      <CartBar />
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense>
      <ShopContent />
    </Suspense>
  );
}
