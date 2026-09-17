import type { Metadata } from "next";
import { Eyebrow } from "@/components/eyebrow";
import { BookingButton } from "@/components/booking-button";
import { WaitlistForm } from "@/components/waitlist-form";
import { getSlotState } from "@/lib/pick-my-brain";
import { included, excluded, pickMyBrainConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: `Pick My Brain — ${pickMyBrainConfig.durationMinutes} minutes, one decision`,
  description: `£${pickMyBrainConfig.price} for ${pickMyBrainConfig.durationMinutes} minutes and a written follow-up. A hard monthly cap, by design.`,
};

export default function PickMyBrainPage() {
  const slot = getSlotState();

  return (
    <div className="max-w-[1240px] mx-auto px-10 pt-16 pb-[110px]">
      <Eyebrow className="mb-[18px]">{slot.durationMinutes} minutes, one decision</Eyebrow>
      <h1
        className="font-serif font-light m-0 mb-[18px] text-ink"
        style={{ fontSize: "clamp(34px, 4.6vw, 52px)", lineHeight: 1.06, letterSpacing: "-0.02em" }}
      >
        Pick My Brain
      </h1>
      <p
        className="font-serif font-light text-umber max-w-[30em] m-0 mb-5"
        style={{ fontSize: "clamp(21px, 2.2vw, 26px)", lineHeight: 1.45 }}
      >
        I keep {slot.capWord} free each month. Not a marketing device — it is simply how many I
        can prepare for properly while doing the rest of my work.
      </p>
      <p className="text-[17px] leading-relaxed text-muted max-w-[34em] m-0 mb-12">
        £{slot.price} for {slot.durationMinutes} minutes and a written follow-up. Slots open on
        the first working day of the month, released in a single batch. When they are gone, they
        are gone until the next one — I would rather turn you away than arrive unprepared.
      </p>

      <div className="grid gap-8 items-start" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}>
        <div className="bg-paper border border-sand rounded-[4px] p-[34px]">
          <div className="flex justify-between items-baseline mb-6 gap-4 flex-wrap">
            <div className="font-serif text-[26px]">{slot.monthLabel}</div>
            <div className="font-mono text-[11px] tracking-[0.1em] uppercase text-terracotta-dark">
              {slot.slotSentence}
            </div>
          </div>
          {slot.slots.map((s, i) => (
            <div key={i} className="flex items-center gap-[18px] py-[18px] border-t border-sand-line">
              <div className="font-mono text-[13px] text-ink min-w-[96px]">{s.date}</div>
              <div className="text-[15px] text-muted flex-1">{s.time}</div>
              <div className="text-sm font-semibold text-faint">{s.state}</div>
            </div>
          ))}
          <div className="mt-7 pt-6 border-t border-sand">
            {slot.isFull ? (
              <div>
                <div className="text-base font-semibold text-ink mb-2">{slot.monthLabel} is closed.</div>
                <p className="text-[15px] leading-snug text-muted m-0 mb-4.5">
                  Leave your email and you will hear an hour before the next month opens publicly,
                  plus first refusal on any cancellation. No other mail comes from this list.
                </p>
                <WaitlistForm />
              </div>
            ) : (
              <BookingButton label={slot.brainCta} />
            )}
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <div className="border border-sand rounded-[4px] p-7">
            <Eyebrow className="mb-4">What&rsquo;s included</Eyebrow>
            {included.map((text) => (
              <div key={text} className="text-[15px] leading-snug text-ink py-[9px] border-t border-sand-line">
                {text}
              </div>
            ))}
          </div>
          <div className="border border-sand rounded-[4px] p-7">
            <Eyebrow tone="faint" className="mb-4">
              What it isn&rsquo;t
            </Eyebrow>
            {excluded.map((text) => (
              <div key={text} className="text-[15px] leading-snug text-muted py-[9px] border-t border-sand-line">
                {text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
