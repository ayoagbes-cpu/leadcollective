"use client";

import { useState } from "react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);

  if (joined) {
    return (
      <p className="text-sm text-cream">You&rsquo;re on the list — look out for next month&rsquo;s letter.</p>
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
        className="flex-1 min-w-[180px] px-[15px] py-[13px] rounded-full border border-[#47332A] bg-[#2E1E15] text-paper text-sm placeholder:text-cream-dim"
      />
      <button
        type="submit"
        className="px-[22px] py-[13px] rounded-full border-0 bg-terracotta-dark text-[#FFF8F1] text-sm font-semibold hover:bg-terracotta-deep"
      >
        Join
      </button>
    </form>
  );
}
