import { pickMyBrainConfig } from "./data";

const CAP_WORDS = ["no", "one", "two", "three", "four", "five", "six", "seven", "eight"];

export function getSlotState() {
  const { cap, taken, monthLabel, releaseLabel, slotDates } = pickMyBrainConfig;
  const left = cap - taken;
  const isFull = left <= 0;

  const capWord =
    (CAP_WORDS[cap] ?? String(cap)) + (cap === 1 ? " conversation" : " conversations");

  const slots = Array.from({ length: cap }, (_, i) => {
    const [date, time] = slotDates[i % slotDates.length];
    return { date, time, state: i < taken ? "Taken" : "Available" } as const;
  });

  return {
    cap,
    taken,
    left,
    isFull,
    hasRoom: !isFull,
    monthLabel,
    releaseLabel,
    capWord,
    slotSentence: isFull ? "Fully booked this month" : `${left} of ${cap} slots left`,
    slotHeadline: isFull
      ? "This month is fully booked."
      : left === 1
        ? "One slot left this month."
        : `${left} slots left this month.`,
    brainCta: isFull ? "Join the waitlist" : "Book a slot · £250",
    filled: Array.from({ length: taken }),
    empty: Array.from({ length: left }),
    slots,
  };
}
