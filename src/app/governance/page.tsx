import type { Metadata } from "next";
import { Eyebrow } from "@/components/eyebrow";
import { EnquiryForm } from "@/components/enquiry-form";

export const metadata: Metadata = {
  title: "Governance & Boards — Lead Collective",
  description:
    "Board effectiveness reviews, trustee inductions and chair coaching for organisations that want a sharper conversation around the table.",
};

const offerings = [
  {
    title: "Board effectiveness reviews",
    body: "A structured look at how your board actually works — papers, conflict, follow-through — with a short written report and a session to walk through it.",
  },
  {
    title: "Trustee inductions",
    body: "A half-day or two-session induction for new trustees that goes beyond the governance handbook into how decisions really get made.",
  },
  {
    title: "Chair coaching",
    body: "One-to-one work with a chair on running the room, managing a difficult board dynamic, or preparing for a succession.",
  },
];

export default function GovernancePage() {
  return (
    <div className="max-w-[1240px] mx-auto px-10 pt-16 pb-[110px]">
      <Eyebrow tone="faint" className="mb-4">
        Also available
      </Eyebrow>
      <h1
        className="font-serif font-light m-0 mb-[18px] text-ink"
        style={{ fontSize: "clamp(34px, 4.6vw, 52px)", lineHeight: 1.06, letterSpacing: "-0.02em" }}
      >
        Governance &amp; boards
      </h1>
      <p className="text-[17px] leading-relaxed text-muted max-w-[34em] m-0 mb-14">
        Board effectiveness reviews, trustee inductions and chair coaching for organisations that
        want a sharper conversation around the table — drawn from twenty years in financial
        services and a decade chairing and sitting on boards.
      </p>

      <div className="grid gap-6 mb-16" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
        {offerings.map((o) => (
          <div key={o.title} className="bg-paper border border-sand rounded-[4px] p-[30px]">
            <h3 className="font-serif font-normal text-[22px] leading-tight m-0 mb-3 text-ink">
              {o.title}
            </h3>
            <p className="text-[15px] leading-relaxed text-muted m-0">{o.body}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-12 items-start" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}>
        <div>
          <h2 className="font-serif font-normal text-[26px] m-0 mb-4 text-ink">Enquire</h2>
          <p className="text-[15px] leading-relaxed text-muted max-w-[30em] m-0">
            Tell me a little about the organisation and what prompted the enquiry, and I&rsquo;ll come
            back with next steps and a day rate.
          </p>
        </div>
        <EnquiryForm messageLabel="What's the organisation, and what's prompting this?" />
      </div>
    </div>
  );
}
