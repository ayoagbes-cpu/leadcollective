"use client";

import { useState } from "react";

export function BookingButton({ label }: { label: string }) {
  const [booked, setBooked] = useState(false);

  if (booked) {
    return (
      <p className="text-[15px] font-semibold text-terracotta-dark">
        Booked — a confirmation and prep questionnaire are on their way.
      </p>
    );
  }

  return (
    <button
      onClick={() => setBooked(true)}
      className="text-[15px] font-semibold px-[30px] py-4 rounded-full whitespace-nowrap border-0 bg-terracotta-dark text-[#FFF8F1] hover:bg-terracotta-deep"
    >
      {label}
    </button>
  );
}
