import type { Metadata } from "next";
import { Eyebrow } from "@/components/eyebrow";
import { EnrolButton } from "@/components/enrol-button";
import { modules, testimonials, programmePricing } from "@/lib/data";
import { ProgrammeWaitlistForm } from "@/components/programme-waitlist-form";

export const metadata: Metadata = {
  title: "Build Your Business Right — the flagship programme",
  description:
    "Eight modules, one workbook, and every template you need included. Finish with a legal base you could show an investor on Monday.",
};

const cohortOpen = true;
const enrolLabel = cohortOpen ? "Join the spring cohort" : "Cohort full — join the waitlist";

export default function ProgrammePage() {
  return (
    <div className="max-w-[1240px] mx-auto px-10 pt-16 pb-[110px]">
      <Eyebrow className="mb-[18px]">Flagship programme</Eyebrow>
      <h1
        className="font-serif font-light m-0 mb-[18px] text-ink"
        style={{ fontSize: "clamp(34px, 4.6vw, 52px)", lineHeight: 1.06, letterSpacing: "-0.02em" }}
      >
        Build Your Business Right
      </h1>
      <p className="text-[17px] leading-relaxed text-muted max-w-[34em] m-0 mb-8">
        Eight modules, one workbook, and every template you need included. Finish with a legal
        base you could show an investor on Monday.
      </p>

      <div className="border border-sand rounded-[4px] bg-paper px-7 py-6 mb-14 flex flex-col gap-3 max-w-[42em]">
        <div className="font-mono text-[10px] tracking-[0.14em] uppercase text-terracotta-dark">
          Cohort opens next — join the waitlist
        </div>
        <p className="text-[15px] leading-snug text-muted m-0">
          The first cohort runs at introductory pricing. The waitlist hears about dates and
          pricing before either goes public.
        </p>
        <ProgrammeWaitlistForm />
      </div>

      <div className="grid gap-12 items-start" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}>
        <div>
          <h2 className="font-serif font-normal text-[26px] m-0 mb-[22px] text-ink">Curriculum</h2>
          {modules.map((m) => (
            <div key={m.no} className="flex gap-5 py-5 border-t border-sand">
              <div className="font-serif text-[26px] text-terracotta leading-none min-w-[34px]">
                {m.no}
              </div>
              <div>
                <div className="text-[17px] font-semibold text-ink mb-1.5">{m.title}</div>
                <div className="text-[15px] leading-snug text-muted">{m.body}</div>
                <div className="font-mono text-[11px] text-faint mt-2">{m.meta}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-5">
          <div className="bg-paper border border-sand rounded-[4px] p-[30px]">
            <Eyebrow tone="faint" className="mb-3.5">
              Self-paced
            </Eyebrow>
            <div className="font-serif text-[42px] leading-none mb-4">£{programmePricing.selfPaced}</div>
            <div className="text-[15px] leading-relaxed text-muted mb-5">
              All eight modules, workbook, template pack, lifetime access. Pay in three
              instalments of £{Math.round(programmePricing.selfPaced / 3)}.
            </div>
            <EnrolButton
              label="Enrol now"
              className="border border-border bg-transparent text-umber hover:bg-hover"
            />
          </div>

          <div className="bg-umber text-cream rounded-[4px] p-[30px]">
            <Eyebrow tone="apricot" className="mb-3.5">
              Cohort · twelve founders
            </Eyebrow>
            <div className="font-serif text-[42px] leading-none mb-1 text-paper">£{programmePricing.cohort}</div>
            <div className="text-[12px] uppercase tracking-[0.08em] text-apricot mb-4">
              {programmePricing.cohortNote}
            </div>
            <div className="text-[15px] leading-relaxed text-clay mb-5">
              Everything self-paced, plus eight live sessions, document review on your own
              contracts, and a peer group that stays after. Payment plans available.
            </div>
            <EnrolButton label={enrolLabel} className="border-0 bg-shell text-umber hover:bg-paper" />
          </div>

          <div className="border border-sand rounded-[4px] px-[30px] py-[26px]">
            <p className="font-serif italic text-[20px] leading-snug text-ink m-0 mb-3.5">
              &ldquo;{testimonials.programme.quote}&rdquo;
            </p>
            <div className="font-mono text-[10px] tracking-[0.12em] uppercase text-faint">
              {testimonials.programme.attribution}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
