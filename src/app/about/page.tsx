import type { Metadata } from "next";
import { Eyebrow } from "@/components/eyebrow";
import { PhotoPlaceholder } from "@/components/photo-placeholder";
import { Button } from "@/components/button";

export const metadata: Metadata = {
  title: "About — Lead Collective",
  description: "Ayo Odusanya — board chair, published author, and financial-services leader.",
};

const stats = [
  ["Chair", "of a national charity board; trustee of two others"],
  ["Author", "of Build Your Business Right, the book behind the programme"],
  ["20 yrs", "financial-services leadership, latterly at executive level"],
  ["400+", "founders through workshops, talks and one-to-ones"],
];

export default function AboutPage() {
  return (
    <div className="max-w-[1240px] mx-auto px-10 pt-16 pb-[110px]">
      <Eyebrow className="mb-[18px]">About</Eyebrow>
      <h1
        className="font-serif font-light m-0 mb-[18px] text-ink"
        style={{ fontSize: "clamp(34px, 4.6vw, 52px)", lineHeight: 1.06, letterSpacing: "-0.02em" }}
      >
        Ayo Odusanya — your sharpest friend, who happens to sit on boards.
      </h1>
      <p className="text-[17px] leading-relaxed text-muted max-w-[36em] m-0 mb-14">
        Not a compliance CV. Twenty years in financial services and a decade in boardrooms, put to
        work for the founders who never get sat down and told how any of this actually works.
      </p>

      <div className="grid gap-12 items-start mb-16" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}>
        <PhotoPlaceholder caption="Drop an environment shot of Ayo — natural light, 16:10" aspect="16 / 10" className="lg:col-span-1" />
        <div className="flex flex-col gap-5">
          <p className="text-[17px] leading-relaxed text-umber m-0 max-w-[34em]">
            I started in financial services twenty years ago and spent the last decade in
            boardrooms — chairing, advising, and watching good businesses come unstuck on
            documents they signed without a second read in year one.
          </p>
          <p className="text-[17px] leading-relaxed text-umber m-0 max-w-[34em]">
            Lead Collective exists because the founders I meet through workshops and one-to-ones
            keep asking the same question in different words: &ldquo;is this normal, and am I
            missing something?&rdquo; Usually the answer is a document, not a lecture — so that&rsquo;s
            what I built first.
          </p>
          <p className="text-[17px] leading-relaxed text-umber m-0 max-w-[34em]">
            I wrote <em>Build Your Business Right</em> for the same reason: not as a manifesto, but
            as the sequence of decisions I&rsquo;d want a first-time founder to make in order, with
            the paperwork attached.
          </p>
        </div>
      </div>

      <div
        className="grid gap-7 pt-[30px] pb-16 border-t border-sand-line"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))" }}
      >
        {stats.map(([stat, desc]) => (
          <div key={stat}>
            <div className="font-serif text-[30px] text-terracotta-dark leading-none">{stat}</div>
            <div className="text-sm text-muted mt-2 leading-snug">{desc}</div>
          </div>
        ))}
      </div>

      <div className="border-l-2 border-terracotta pl-8 mb-16">
        <p className="font-serif italic font-light text-[24px] leading-snug text-ink m-0 max-w-[36em]">
          &ldquo;Governance isn&rsquo;t a department you hire later. It&rsquo;s a habit you either build in
          year one, or pay someone to untangle in year four.&rdquo;
        </p>
      </div>

      <div className="flex gap-5 flex-wrap items-center">
        <Button href="/build-your-business-right" variant="primary">
          Start the programme
        </Button>
        <Button href="/pick-my-brain" variant="text">
          or book an hour of my time
        </Button>
      </div>
    </div>
  );
}
