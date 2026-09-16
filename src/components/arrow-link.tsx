import Link from "next/link";

export function ArrowLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-[14px] font-semibold text-terracotta-dark hover:text-umber-light hover:underline">
      {children}
    </Link>
  );
}
