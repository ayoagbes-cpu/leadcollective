"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

export function EnrolButton({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  const [clicked, setClicked] = useState(false);

  return (
    <button
      onClick={() => setClicked(true)}
      disabled={clicked}
      className={cn(
        "w-full text-[15px] font-semibold py-[15px] rounded-full whitespace-nowrap disabled:opacity-70",
        className
      )}
    >
      {clicked ? "Enrolled — check your inbox" : label}
    </button>
  );
}
