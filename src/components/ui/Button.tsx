import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { Arrow } from "@/components/art/Motifs";

export type ButtonVariant = "solid" | "purple" | "lime" | "white" | "outline" | "outline-light" | "turmeric" | "ghost";

const base =
  "group relative inline-flex items-center justify-between gap-5 min-h-12 px-6 py-3 font-display text-[0.92rem] font-bold uppercase tracking-[0.06em] overflow-hidden isolate transition-colors duration-500 ease-[var(--ease-studio)]";

const variants: Record<ButtonVariant, string> = {
  solid:
    "bg-ink text-paper border-2 border-ink before:bg-purple hover:text-paper focus-visible:text-paper",
  purple:
    "bg-purple text-paper border-2 border-purple before:bg-ink hover:text-lime focus-visible:text-lime",
  lime:
    "bg-lime text-ink border-2 border-ink before:bg-ink hover:text-lime focus-visible:text-lime",
  white:
    "bg-paper text-ink border-2 border-paper before:bg-lime hover:text-ink focus-visible:text-ink",
  turmeric:
    "bg-lime text-ink border-2 border-ink before:bg-ink hover:text-lime focus-visible:text-lime",
  outline:
    "border-2 border-current before:bg-ink hover:text-paper focus-visible:text-paper",
  "outline-light":
    "border-2 border-paper/80 text-paper before:bg-paper hover:text-purple focus-visible:text-purple",
  ghost: "px-0! py-1! min-h-0! justify-start! before:hidden border-0",
};

const sweep =
  "before:absolute before:inset-0 before:-z-10 before:origin-bottom before:scale-y-0 before:transition-transform before:duration-500 before:ease-[var(--ease-studio)] hover:before:scale-y-100 focus-visible:before:scale-y-100";

export function ButtonLink({
  href,
  children,
  variant = "solid",
  className = "",
  arrow = true,
  ...rest
}: {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  arrow?: boolean;
} & Omit<ComponentProps<typeof Link>, "href" | "className" | "children">) {
  return (
    <Link href={href} className={`${base} ${sweep} ${variants[variant]} ${className}`} {...rest}>
      <span>{children}</span>
      {arrow && (
        <Arrow className="size-4 shrink-0 transition-transform duration-500 ease-[var(--ease-studio)] group-hover:translate-x-1" />
      )}
    </Link>
  );
}

export function buttonClasses(variant: ButtonVariant = "solid", className = "") {
  return `${base} ${sweep} ${variants[variant]} ${className}`;
}
