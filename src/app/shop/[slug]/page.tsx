import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Eyebrow } from "@/components/eyebrow";
import { AddToCartButton } from "@/components/add-to-cart-button";
import { products } from "@/lib/data";
import { formatGBP } from "@/lib/format";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

async function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProduct(slug);
  if (!product) return {};
  return {
    title: `${product.title} — Lead Collective Shop`,
    description: product.blurb,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = await getProduct(slug);
  if (!product) notFound();

  const lineWidths = [92, 78, 54, 88, 64, 41, 84, 70];

  return (
    <div className="max-w-[1240px] mx-auto px-10 pt-16 pb-[110px]">
      <Eyebrow className="mb-[18px]">Product page</Eyebrow>
      <div className="grid gap-11 items-start" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
        <div className="bg-paper border border-sand rounded-[4px] p-5">
          <div
            className="bg-paper-deep border border-sand-line p-[30px_26px] flex flex-col gap-[11px]"
            style={{ aspectRatio: "3 / 4" }}
          >
            <div className="font-mono text-[9px] tracking-[0.1em] text-taupe">
              PAGE 1 OF {product.pages} · WATERMARKED PREVIEW
            </div>
            <div className="font-serif text-[19px] text-ink">{product.title}</div>
            <div className="h-px bg-sand-line" />
            {lineWidths.map((w, i) => (
              <div
                key={i}
                className={`h-[7px] ${i === 2 || i === 5 ? "bg-blush" : "bg-hover"}`}
                style={{ width: `${w}%` }}
              />
            ))}
            <div className="font-mono text-[9px] text-terracotta mt-auto">
              HIGHLIGHTED FIELDS ARE YOURS TO FILL
            </div>
          </div>
        </div>

        <div>
          <Eyebrow className="mb-3">
            {product.audience}
            {product.stage ? ` · ${product.stage}` : ""} · {product.category}
          </Eyebrow>
          <h1
            className="font-serif font-light m-0 mb-3.5 text-ink"
            style={{ fontSize: "clamp(28px, 3.2vw, 36px)", lineHeight: 1.1 }}
          >
            {product.title}
          </h1>
          <div className="font-serif text-[28px] text-ink mb-5">{formatGBP(product.price)}</div>
          <p className="text-base leading-relaxed text-muted m-0 mb-6 max-w-[32em]">
            {product.description}
          </p>
          <div className="grid mb-[26px]">
            {[
              ["FORMAT", product.format],
              ["LICENCE", product.licence],
              ["DELIVERY", product.delivery],
              ["PAIRS WITH", product.pairsWith],
            ].map(([label, value], i, arr) => (
              <div
                key={label}
                className={`flex gap-4 py-3 border-t border-sand-line ${i === arr.length - 1 ? "border-b" : ""}`}
              >
                <div className="font-mono text-[11px] text-faint min-w-[96px]">{label}</div>
                <div className="text-[15px] text-ink">{value}</div>
              </div>
            ))}
          </div>
          <div className="flex gap-3.5 flex-wrap items-center">
            <AddToCartButton product={product} />
            <div className="text-sm text-muted">Bundle all three and the third is half price</div>
          </div>
        </div>
      </div>
    </div>
  );
}
