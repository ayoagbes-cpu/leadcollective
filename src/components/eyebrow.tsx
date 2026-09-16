import { cn } from "@/lib/cn";

export function Eyebrow({
  children,
  className,
  tone = "terracotta",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "terracotta" | "faint" | "apricot";
}) {
  const toneClass =
    tone === "terracotta"
      ? "text-terracotta-dark"
      : tone === "apricot"
        ? "text-apricot"
        : "text-faint";
  return (
    <div
      className={cn(
        "font-mono text-[11px] tracking-[0.16em] uppercase",
        toneClass,
        className
      )}
    >
      {children}
    </div>
  );
}
