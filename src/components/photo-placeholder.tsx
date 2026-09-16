import { cn } from "@/lib/cn";

export function PhotoPlaceholder({
  caption,
  aspect,
  className,
  rounded = true,
}: {
  caption: string;
  aspect: string;
  className?: string;
  rounded?: boolean;
}) {
  return (
    <div
      className={cn(
        "stripe-placeholder flex items-end p-4 border border-sand",
        rounded && "rounded-[3px]",
        className
      )}
      style={{ aspectRatio: aspect }}
    >
      <div className="font-mono text-[10px] leading-snug text-faint bg-paper px-2.5 py-1.5">
        {caption}
      </div>
    </div>
  );
}
