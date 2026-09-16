"use client";

import { useState } from "react";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);

  if (joined) {
    return (
      <p className="text-[15px] text-muted">
        You&rsquo;re on the list — you&rsquo;ll hear an hour before the next month opens.
      </p>
    );
  }

  return (
    <form
      className="flex gap-2 flex-wrap"
      onSubmit={(e) => {
        e.preventDefault();
        if (email.trim()) setJoined(true);
      }}
    >
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@yourbusiness.com"
        className="flex-1 min-w-[200px] px-4 py-3.5 rounded-full border border-border bg-paper-deep text-[15px] text-ink"
      />
      <button
        type="submit"
        className="px-[26px] py-3.5 rounded-full border-0 bg-terracotta-dark text-[#FFF8F1] text-[15px] font-semibold hover:bg-terracotta-deep"
      >
        Join the waitlist
      </button>
    </form>
  );
}
