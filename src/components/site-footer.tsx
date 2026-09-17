import Link from "next/link";
import { NewsletterForm } from "@/components/newsletter-form";
import { Eyebrow } from "@/components/eyebrow";

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div className="flex flex-col gap-2.5 text-sm">
      <Eyebrow tone="faint" className="text-[10px] mb-1.5">
        {title}
      </Eyebrow>
      {links.map((l) => (
        <Link key={l.label} href={l.href} className="text-cream hover:underline">
          {l.label}
        </Link>
      ))}
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-ink text-cream">
      <div className="max-w-[1240px] mx-auto grid gap-12 px-10 pt-[72px] pb-10" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
        <div>
          <h3 className="font-serif font-light text-[26px] leading-tight m-0 mb-3.5 text-paper">
            One letter a month. Nothing else.
          </h3>
          <p className="text-sm leading-snug text-cream-dim m-0 mb-5">
            New templates, slot-release dates, and one thing I&rsquo;ve learned in a boardroom.
          </p>
          <NewsletterForm />
        </div>
        <FooterColumn
          title="Work with me"
          links={[
            { href: "/shop", label: "The Contract Treasury" },
            { href: "/shop?audience=boards", label: "The Governance Toolkit" },
            { href: "/build-your-business-right", label: "Build Your Business Right" },
            { href: "/pick-my-brain", label: "Pick My Brain" },
          ]}
        />
        <FooterColumn
          title="Organisations"
          links={[
            { href: "/governance", label: "Governance & Boards Advisory" },
            { href: "/speaking", label: "Speaking" },
            { href: "/about", label: "About" },
          ]}
        />
        <FooterColumn
          title="Detail"
          links={[
            { href: "/shop", label: "Template licence terms" },
            { href: "/contact", label: "Privacy" },
            { href: "/contact", label: "Contact" },
            { href: "/app", label: "Companion app" },
          ]}
        />
      </div>
      <div className="max-w-[1240px] mx-auto px-10 pb-11 text-xs text-[#7A6552]">
        Lead Collective is not a law firm and does not provide legal advice. Templates are
        provided under licence for use by the purchasing business.
      </div>
    </footer>
  );
}
