"use client";

import { useState } from "react";

export function EnquiryForm({
  submitLabel = "Send enquiry",
  confirmMessage = "Thank you — I read every enquiry myself and reply within two working days.",
  messageLabel = "What would you like to talk about?",
}: {
  submitLabel?: string;
  confirmMessage?: string;
  messageLabel?: string;
}) {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="border border-sand rounded-[4px] bg-paper p-7">
        <p className="text-[15px] leading-relaxed text-ink m-0">{confirmMessage}</p>
      </div>
    );
  }

  return (
    <form
      className="border border-sand rounded-[4px] bg-paper p-7 flex flex-col gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <div className="grid gap-4" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}>
        <label className="flex flex-col gap-1.5">
          <span className="text-[13px] font-semibold text-umber">Name</span>
          <input
            required
            type="text"
            className="px-[15px] py-[13px] rounded-[3px] border border-border bg-paper-deep text-[15px] text-ink"
          />
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="text-[13px] font-semibold text-umber">Work email</span>
          <input
            required
            type="email"
            placeholder="you@yourbusiness.com"
            className="px-[15px] py-[13px] rounded-[3px] border border-border bg-paper-deep text-[15px] text-ink"
          />
        </label>
      </div>
      <label className="flex flex-col gap-1.5">
        <span className="text-[13px] font-semibold text-umber">{messageLabel}</span>
        <textarea
          required
          rows={4}
          className="px-[15px] py-[13px] rounded-[3px] border border-border bg-paper-deep text-[15px] text-ink resize-none"
        />
      </label>
      <button
        type="submit"
        className="self-start text-[15px] font-semibold px-[30px] py-4 rounded-full whitespace-nowrap border-0 bg-terracotta-dark text-[#FFF8F1] hover:bg-terracotta-deep"
      >
        {submitLabel}
      </button>
    </form>
  );
}
