import Link from "next/link";
import { Button } from "@/components/button";

const NAV = [
  { href: "/shop", label: "Shop" },
  { href: "/build-your-business-right", label: "The programme" },
  { href: "/speaking", label: "Speaking" },
  { href: "/about", label: "About" },
];

export function SiteHeader() {
  return (
    <header className="max-w-[1240px] mx-auto w-full px-10 pt-8 pb-6 flex items-baseline gap-10 flex-wrap border-b border-sand-line">
      <Link href="/" className="font-serif text-[22px] leading-[1.05] tracking-[0.01em] text-umber">
        Lead
        <br />
        <span className="font-sans text-xs tracking-[0.22em] uppercase text-terracotta-dark">
          Collective
        </span>
      </Link>
      <div className="ml-auto flex items-center gap-7 flex-wrap">
        <nav className="flex gap-6 flex-wrap text-sm text-umber">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} className="text-umber hover:text-terracotta-dark hover:underline">
              {item.label}
            </Link>
          ))}
        </nav>
        <Button href="/pick-my-brain" variant="commerce" small>
          Book Pick My Brain
        </Button>
      </div>
    </header>
  );
}
