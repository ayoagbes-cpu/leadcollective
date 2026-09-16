import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "commerce" | "outline" | "text";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full text-[15px] font-semibold whitespace-nowrap transition-colors";

const variantClass: Record<Variant, string> = {
  primary: "bg-umber text-paper px-[30px] py-4 hover:bg-ink",
  commerce: "bg-terracotta-dark text-[#FFF8F1] px-[30px] py-4 hover:bg-terracotta-deep",
  outline:
    "bg-transparent text-umber border border-border px-[29px] py-[15px] hover:bg-hover",
  text: "text-terracotta-dark font-semibold underline decoration-border underline-offset-[5px] hover:text-umber-light",
};

type CommonProps = {
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  small?: boolean;
};

type ButtonAsLink = CommonProps & {
  href: string;
  onClick?: never;
  type?: never;
  disabled?: never;
};

type ButtonAsButton = CommonProps & {
  href?: never;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
};

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const { children, variant = "primary", className, small } = props;
  const classes = cn(
    base,
    variantClass[variant],
    small && variant !== "text" && "px-5 py-[11px] text-[13px]",
    className
  );

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={classes}>
        {children}
      </Link>
    );
  }

  const { onClick, type = "button", disabled } = props as ButtonAsButton;
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
