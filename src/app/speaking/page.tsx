import type { Metadata } from "next";
import { Eyebrow } from "@/components/eyebrow";
import { EnquiryForm } from "@/components/enquiry-form";

export const metadata: Metadata = {
  title: "Speaking — Lead Collective",
  description:
    "Keynotes and panels on founder governance, women in leadership and building durable businesses. Day rates from £2,500.",
};

const topics = [
  "Founder governance — what actually breaks in year one",
  "Women building businesses: the legal foundations nobody hands you",
  "From founder to chair: leading a business that outgrows you",
  "The boardroom conversations early-stage companies skip",
];

const credits = [
  "Keynote, Founders Forum Women",
  "Panel chair, Board Effectiveness Summit",
  "Guest lecture, London Business School",
  "Workshop series, Enterprise Nation",
];

export default function SpeakingPage() {
  return (
    <div className="max-w-[1240px] mx-auto px-10 pt-16 pb-[110px]">
      <Eyebrow tone="faint" className="mb-4">
        Stages &amp; keynotes
      </Eyebrow>
      <h1
        className="font-serif font-light m-0 mb-[18px] text-ink"
        style={{ fontSize: "clamp(34px, 4.6vw, 52px)", lineHeight: 1.06, letterSpacing: "-0.02em" }}
      >
        Speaking
      </h1>
      <p className="text-[17px] leading-relaxed text-muted max-w-[34em] m-0 mb-4">
        Keynotes and panels on founder governance, women in leadership and building durable
        businesses.
      </p>
      <div className="font-serif text-[28px] text-ink mb-3">Day rates from £2,500</div>
      <div className="text-sm text-muted mb-14">Extended payment terms available for booked engagements.</div>

      <div className="grid gap-12 mb-16" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
        <div>
          <h2 className="font-serif font-normal text-[26px] m-0 mb-5 text-ink">Topics</h2>
          {topics.map((t) => (
            <div key={t} className="text-[15px] leading-snug text-ink py-3 border-t border-sand-line">
              {t}
            </div>
          ))}
        </div>
        <div>
          <h2 className="font-serif font-normal text-[26px] m-0 mb-5 text-ink">Past credits</h2>
          {credits.map((c) => (
            <div key={c} className="text-[15px] leading-snug text-muted py-3 border-t border-sand-line">
              {c}
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-12 items-start" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}>
        <div>
          <h2 className="font-serif font-normal text-[26px] m-0 mb-4 text-ink">Enquire about a date</h2>
          <p className="text-[15px] leading-relaxed text-muted max-w-[30em] m-0">
            Send the event, audience and date and I&rsquo;ll confirm availability and terms.
          </p>
        </div>
        <EnquiryForm
          submitLabel="Send booking enquiry"
          messageLabel="Event, audience size and date"
        />
      </div>
    </div>
  );
}
