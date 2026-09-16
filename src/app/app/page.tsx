import type { Metadata } from "next";
import { Eyebrow } from "@/components/eyebrow";
import { PhoneFrame } from "@/components/phone-frame";

export const metadata: Metadata = {
  title: "The companion app — Lead Collective",
  description:
    "Three jobs only: reach your library, keep moving through the programme, and never miss slot-release day.",
};

function TabBar({ active }: { active: "Library" | "Programme" | "Book" }) {
  const tabs = ["Library", "Programme", "Book"] as const;
  return (
    <div className="flex border-t border-sand bg-paper">
      {tabs.map((t) => (
        <div
          key={t}
          className={`flex-1 text-center pt-3.5 pb-5 text-[11px] ${
            t === active ? "text-terracotta-dark font-bold" : "text-faint"
          }`}
        >
          {t}
        </div>
      ))}
    </div>
  );
}

export default function AppPage() {
  return (
    <div className="max-w-[1240px] mx-auto px-10 pt-16 pb-[110px]">
      <Eyebrow className="mb-[18px]">Companion app</Eyebrow>
      <h1
        className="font-serif font-light m-0 mb-[18px] text-ink"
        style={{ fontSize: "clamp(34px, 4.6vw, 52px)", lineHeight: 1.06, letterSpacing: "-0.02em" }}
      >
        Companion app
      </h1>
      <p className="text-[17px] leading-relaxed text-muted max-w-[38em] m-0 mb-14">
        Three jobs only: reach your library, keep moving through the programme, and never miss
        slot-release day. Everything else stays on the web. Built once and shipped to both iOS and
        Android — the frames below are the shared layout; platform conventions differ only in
        navigation chrome (iOS tab bar, Android bottom navigation) and the notification permission
        prompt.
      </p>

      <div className="grid gap-8" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
        {/* Library */}
        <div>
          <PhoneFrame>
            <div className="px-5 pt-5 pb-[26px]">
              <div className="font-serif text-[27px] mb-1">Your library</div>
              <div className="text-[13px] text-faint mb-5">11 documents · 2 new this month</div>
              {[
                { tag: "NEW · YEAR 1", tagColor: "text-terracotta-dark", title: "Freelancer IP Assignment", meta: "DOCX · 4 pages · guidance note" },
                { tag: "PRE-LAUNCH", tagColor: "text-faint", title: "Founders' Agreement", meta: "Downloaded · Mar 2026" },
                { tag: "YEAR 1", tagColor: "text-faint", title: "Client Services Contract", meta: "Downloaded · Feb 2026" },
              ].map((c) => (
                <div key={c.title} className="bg-paper border border-sand rounded-[6px] p-4 mb-2.5">
                  <div className={`font-mono text-[9px] tracking-[0.12em] mb-1.5 ${c.tagColor}`}>{c.tag}</div>
                  <div className="text-[15px] font-semibold mb-1">{c.title}</div>
                  <div className="text-xs text-muted">{c.meta}</div>
                </div>
              ))}
            </div>
            <TabBar active="Library" />
          </PhoneFrame>
          <div className="font-mono text-[11px] text-faint mt-3.5 leading-snug">
            Template library — everything purchased, re-downloadable, licence attached. Push: new
            template drops.
          </div>
        </div>

        {/* Programme */}
        <div>
          <PhoneFrame>
            <div className="px-5 pt-5 pb-[26px]">
              <div className="font-serif text-[27px] mb-4">Build Your Business Right</div>
              <div className="flex gap-1.5 mb-2">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} className={`flex-1 h-1.5 rounded-full ${i < 3 ? "bg-terracotta" : "bg-sand"}`} />
                ))}
              </div>
              <div className="text-xs text-faint mb-[22px]">3 of 8 modules · 41% complete</div>
              <div className="bg-umber rounded-lg p-[18px] mb-3">
                <div className="font-mono text-[9px] tracking-[0.12em] text-apricot mb-1.5">UP NEXT · MODULE 4</div>
                <div className="text-base font-semibold text-paper mb-2.5">Who owns what you make</div>
                <div className="text-xs text-cream-dim">Video 22 min · workbook · 2 templates</div>
              </div>
              <div className="bg-paper border border-sand rounded-lg p-[18px] opacity-75">
                <div className="font-mono text-[9px] tracking-[0.12em] text-faint mb-1.5">LOCKED · UNLOCKS 24 SEP</div>
                <div className="text-base font-semibold mb-1">Module 5 — Hiring without heartache</div>
                <div className="text-xs text-muted">Cohort pacing keeps the group together</div>
              </div>
            </div>
            <TabBar active="Programme" />
          </PhoneFrame>
          <div className="font-mono text-[11px] text-faint mt-3.5 leading-snug">
            Programme — progress, next module, gated video. Push: module unlocks.
          </div>
        </div>

        {/* Booking */}
        <div>
          <PhoneFrame>
            <div className="px-5 pt-5 pb-[26px]">
              <div className="bg-blush border border-blush-border rounded-[10px] p-3.5 mb-[22px]">
                <div className="font-mono text-[9px] tracking-[0.12em] text-terracotta-dark mb-1">
                  PUSH · 08:00, 1 OCT
                </div>
                <div className="text-sm leading-snug text-umber">
                  October slots open in one hour. You&rsquo;re on the waitlist — tap to book before
                  it&rsquo;s public.
                </div>
              </div>
              <div className="font-serif text-[27px] mb-1">Pick My Brain</div>
              <div className="text-[13px] text-faint mb-[18px]">October · 4 slots · £250</div>
              {[
                { day: "Tue 6 Oct", time: "10:00–11:00 BST", state: "Available", taken: false },
                { day: "Thu 15 Oct", time: "14:00–15:00 BST", state: "Available", taken: false },
                { day: "Wed 21 Oct", time: "09:00–10:00 BST", state: "Taken", taken: true },
              ].map((s) => (
                <div
                  key={s.day}
                  className={`rounded-lg p-4 flex justify-between items-center mb-2.5 border ${
                    s.taken ? "bg-sand-line border-sand" : "bg-paper border-sand"
                  }`}
                >
                  <div>
                    <div className={`text-[15px] font-semibold ${s.taken ? "text-muted" : "text-ink"}`}>{s.day}</div>
                    <div className={`text-xs ${s.taken ? "text-faint" : "text-muted"}`}>{s.time}</div>
                  </div>
                  <div className={`text-xs font-bold ${s.taken ? "text-faint" : "text-terracotta-dark"}`}>
                    {s.state}
                  </div>
                </div>
              ))}
            </div>
            <TabBar active="Book" />
          </PhoneFrame>
          <div className="font-mono text-[11px] text-faint mt-3.5 leading-snug">
            Booking — live cap from the same API as the website. Push: slot-release day,
            reminders.
          </div>
        </div>
      </div>
    </div>
  );
}
