import { Button } from "@/components/button";
import { ArrowLink } from "@/components/arrow-link";
import { Eyebrow } from "@/components/eyebrow";
import { PhotoPlaceholder } from "@/components/photo-placeholder";
import { SlotMeter } from "@/components/slot-meter";
import { getSlotState } from "@/lib/pick-my-brain";
import { testimonials, programmePricing } from "@/lib/data";

const cohortOpen = true;
const enrolLabel = cohortOpen ? "Join the spring cohort" : "Cohort full — join the waitlist";

export default function HomePage() {
  const slot = getSlotState();

  return (
    <div>
      {/* Hero */}
      <section className="max-w-[1240px] mx-auto px-10 pt-[72px] grid gap-12 items-center" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))" }}>
        <div>
          <Eyebrow className="mb-6">Legal foundations &amp; leadership · years 0–3</Eyebrow>
          <h1 className="font-serif font-light m-0 mb-7 text-ink" style={{ fontSize: "clamp(38px, 5.4vw, 68px)", lineHeight: 1.03, letterSpacing: "-0.02em" }}>
            Build your business right — starting with the paperwork nobody taught you.
          </h1>
          <p className="text-lg leading-relaxed text-muted max-w-[30em] m-0 mb-9">
            Boardroom-grade legal foundations for women founders, without the retainer. Contracts
            you can actually use, a programme that walks you through them, and an hour of my
            undivided attention when you need a decision made.
          </p>
          <div className="flex gap-5 items-center flex-wrap">
            <Button href="/build-your-business-right" variant="primary">
              Start the programme
            </Button>
            <Button href="/shop" variant="text">
              or browse the Shop
            </Button>
          </div>
        </div>
        <div className="max-w-[368px] w-full ml-auto" style={{ maxHeight: 460 }}>
          <PhotoPlaceholder caption="Drop the founder portrait — seated, warm light, 4:5" aspect="4 / 5" />
        </div>
      </section>

      {/* Offerings */}
      <section id="offerings" className="max-w-[1240px] mx-auto px-10 pt-16">
        <div className="grid gap-px bg-sand border border-sand rounded-[4px] overflow-hidden" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
          <div className="bg-paper px-[30px] pt-[34px] pb-[30px]">
            <Eyebrow className="mb-[18px]">01 · TEMPLATES</Eyebrow>
            <h3 className="font-serif font-normal text-[27px] leading-tight m-0 mb-3 text-ink">The Contract Treasury</h3>
            <p className="text-[15px] leading-snug text-muted m-0 mb-[22px]">
              Lawyer-drafted templates you download today and send tomorrow. £15–£60.
            </p>
            <ArrowLink href="/shop">Browse templates →</ArrowLink>
          </div>
          <div className="bg-paper px-[30px] pt-[34px] pb-[30px]">
            <Eyebrow className="mb-[18px]">02 · TEMPLATES</Eyebrow>
            <h3 className="font-serif font-normal text-[27px] leading-tight m-0 mb-3 text-ink">The Governance Toolkit</h3>
            <p className="text-[15px] leading-snug text-muted m-0 mb-[22px]">
              Board packs, terms of reference and trustee onboarding, ready to adapt. £15–£60.
            </p>
            <ArrowLink href="/shop?audience=boards">Browse for boards →</ArrowLink>
          </div>
          <div className="bg-paper px-[30px] pt-[34px] pb-[30px]">
            <Eyebrow className="mb-[18px]">03 · PROGRAMME</Eyebrow>
            <h3 className="font-serif font-normal text-[27px] leading-tight m-0 mb-3 text-ink">Build Your Business Right</h3>
            <p className="text-[15px] leading-snug text-muted m-0 mb-[22px]">
              Eight modules, the book, and your whole legal base built in public. From £{programmePricing.selfPaced}.
            </p>
            <ArrowLink href="/build-your-business-right">See the curriculum →</ArrowLink>
          </div>
          <div className="bg-paper px-[30px] pt-[34px] pb-[30px]">
            <Eyebrow className="mb-[18px]">04 · ADVICE</Eyebrow>
            <h3 className="font-serif font-normal text-[27px] leading-tight m-0 mb-3 text-ink">Pick My Brain</h3>
            <p className="text-[15px] leading-snug text-muted m-0 mb-[22px]">
              {slot.durationMinutes} minutes, one decision, {slot.capWord} a month. £{slot.price}. {slot.slotSentence}.
            </p>
            <ArrowLink href="/pick-my-brain">Check availability →</ArrowLink>
          </div>
        </div>
      </section>

      {/* About teaser */}
      <section id="about" className="max-w-[1240px] mx-auto px-10 py-[108px]">
        <div className="grid gap-12 items-start" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}>
          <h2 className="font-serif font-light m-0 text-ink" style={{ fontSize: "clamp(29px, 3.6vw, 40px)", lineHeight: 1.12, letterSpacing: "-0.01em" }}>
            Ayo Odusanya — your sharpest friend, who happens to sit on boards.
          </h2>
          <div>
            <p className="text-[17px] leading-relaxed text-umber m-0 mb-[30px] max-w-[34em]">
              I spent two decades in financial services and a decade in boardrooms watching good
              businesses come unstuck on documents they signed in year one. Lead Collective is the
              shortcut I wish the founders I advise had been handed at the start.
            </p>
            <div className="grid gap-7 pt-[30px] border-t border-sand-line mb-7" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))" }}>
              {[
                ["Chair", "of a national charity board; trustee of two others"],
                ["Author", "of Build Your Business Right, the book behind the programme"],
                ["20 yrs", "financial-services leadership, latterly at executive level"],
                ["400+", "founders through workshops, talks and one-to-ones"],
              ].map(([stat, desc]) => (
                <div key={stat}>
                  <div className="font-serif text-[30px] text-terracotta-dark leading-none">{stat}</div>
                  <div className="text-sm text-muted mt-2 leading-snug">{desc}</div>
                </div>
              ))}
            </div>
            <ArrowLink href="/about">Read the full story →</ArrowLink>
          </div>
        </div>
      </section>

      {/* Programme */}
      <section className="bg-umber text-shell">
        <div className="max-w-[1240px] mx-auto px-10 py-24 grid gap-14 items-center" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
          <div style={{ aspectRatio: "3 / 4" }}>
            <PhotoPlaceholder caption="Drop the book cover — 3:4" aspect="3 / 4" className="border-[#6B4530]" />
          </div>
          <div>
            <Eyebrow tone="apricot" className="mb-[22px]">The flagship programme</Eyebrow>
            <h2 className="font-serif font-light m-0 mb-[22px]" style={{ fontSize: "clamp(32px, 4.2vw, 48px)", lineHeight: 1.08, letterSpacing: "-0.015em" }}>
              The book, but with me in the room.
            </h2>
            <p className="text-[17px] leading-relaxed text-cream m-0 mb-[34px] max-w-[32em]">
              Eight modules that take you from &ldquo;I think we have a contract somewhere&rdquo; to a
              founder who knows exactly what she has signed, owns and owes. Self-paced or in a
              twelve-woman cohort.
            </p>
            <div className="flex gap-10 flex-wrap mb-[38px]">
              <div>
                <div className="text-[13px] tracking-[0.06em] uppercase text-clay mb-1.5">Self-paced</div>
                <div className="font-serif text-[34px] leading-none">£{programmePricing.selfPaced}</div>
              </div>
              <div className="border-l border-[#6B4530] pl-10">
                <div className="text-[13px] tracking-[0.06em] uppercase text-clay mb-1.5">Cohort · intro price</div>
                <div className="font-serif text-[34px] leading-none">£{programmePricing.cohort}</div>
              </div>
            </div>
            <Button href="/build-your-business-right" variant="primary" className="bg-shell text-umber hover:bg-paper">
              {enrolLabel}
            </Button>
          </div>
        </div>
      </section>

      {/* Pick My Brain */}
      <section className="max-w-[1240px] mx-auto px-10 py-24">
        <div className="border border-border rounded-[4px] bg-paper p-12 grid gap-14 items-center" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
          <div>
            <Eyebrow className="mb-[18px]">Pick My Brain · {slot.monthLabel}</Eyebrow>
            <h2 className="font-serif font-light m-0 mb-4 text-ink" style={{ fontSize: "clamp(28px, 3.4vw, 38px)", lineHeight: 1.1 }}>
              {slot.slotHeadline}
            </h2>
            <p className="text-base leading-relaxed text-muted m-0 max-w-[30em]">
              {slot.durationMinutes} minutes, one written follow-up, and a decision you stop
              carrying around. {slot.capWord} a month, by invitation of the calendar rather than
              the marketing department.
            </p>
          </div>
          <div>
            <div className="mb-5">
              <SlotMeter taken={slot.taken} cap={slot.cap} />
            </div>
            <div className="text-sm text-muted mb-[26px]">
              {slot.slotSentence} · next release {slot.releaseLabel}
            </div>
            <Button href="/pick-my-brain" variant="commerce">
              {slot.brainCta}
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-paper border-y border-sand-line">
        <div className="max-w-[940px] mx-auto px-10 py-24 text-center">
          <p className="font-serif font-light italic m-0 mb-7 text-ink" style={{ fontSize: "clamp(24px, 2.8vw, 34px)", lineHeight: 1.35 }}>
            &ldquo;{testimonials.home.quote}&rdquo;
          </p>
          <div className="font-mono text-[11px] tracking-[0.12em] uppercase text-faint">
            {testimonials.home.attribution}
          </div>
        </div>
      </section>

      {/* Governance & Speaking teaser */}
      <section className="max-w-[1240px] mx-auto px-10 py-[88px]">
        <div className="grid gap-14 items-end" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
          <div>
            <Eyebrow tone="faint" className="mb-4">For toolkit buyers</Eyebrow>
            <h2 className="font-serif font-light text-[34px] leading-tight m-0 mb-3.5 text-ink">Governance &amp; Boards Advisory</h2>
            <p className="text-base leading-relaxed text-muted m-0 mb-5 max-w-[32em]">
              Board effectiveness reviews, trustee inductions and chair coaching — the natural next
              step once a Governance Toolkit template isn&rsquo;t quite enough.
            </p>
            <ArrowLink href="/governance">For boards and trustees →</ArrowLink>
          </div>
          <div>
            <Eyebrow tone="faint" className="mb-4">Stages &amp; keynotes</Eyebrow>
            <h2 className="font-serif font-light text-[34px] leading-tight m-0 mb-3.5 text-ink">Speaking</h2>
            <p className="text-base leading-relaxed text-muted m-0 mb-5 max-w-[32em]">
              Keynotes and panels on founder governance, women in leadership and building durable
              businesses. Day rates from £2,500.
            </p>
            <ArrowLink href="/speaking">Enquire about a date →</ArrowLink>
          </div>
        </div>
      </section>
    </div>
  );
}
