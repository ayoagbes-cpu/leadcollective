import type { Metadata } from "next";
import { Eyebrow } from "@/components/eyebrow";
import { EnquiryForm } from "@/components/enquiry-form";
import { NewsletterForm } from "@/components/newsletter-form";

export const metadata: Metadata = {
  title: "Contact — Lead Collective",
  description: "One form, one letter a month.",
};

export default function ContactPage() {
  return (
    <div className="max-w-[1240px] mx-auto px-10 pt-16 pb-[110px]">
      <Eyebrow className="mb-[18px]">Contact</Eyebrow>
      <h1
        className="font-serif font-light m-0 mb-[18px] text-ink"
        style={{ fontSize: "clamp(34px, 4.6vw, 52px)", lineHeight: 1.06, letterSpacing: "-0.02em" }}
      >
        One form, one letter a month.
      </h1>
      <p className="text-[17px] leading-relaxed text-muted max-w-[34em] m-0 mb-14">
        General questions, template requests, or anything that doesn&rsquo;t fit a booking form —
        send it here. For the newsletter, one email a month with new templates, slot-release
        dates, and one thing I&rsquo;ve learned in a boardroom.
      </p>

      <div className="grid gap-12 items-start" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}>
        <EnquiryForm submitLabel="Send message" messageLabel="How can I help?" />

        <div className="bg-umber text-cream rounded-[4px] p-[34px]">
          <h2 className="font-serif font-light text-[26px] leading-tight m-0 mb-3.5 text-paper">
            Join the newsletter
          </h2>
          <p className="text-sm leading-snug text-cream-dim m-0 mb-5">
            New templates, slot-release dates, and one thing I&rsquo;ve learned in a boardroom. No
            other mail comes from this list.
          </p>
          <NewsletterForm />
        </div>
      </div>
    </div>
  );
}
