import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { Arrow } from "@/components/art/Motifs";

type Variant = "solid" | "outline" | "turmeric" | "ghost";

const base =
  "group relative inline-flex items-center justify-between gap-6 min-h-12 px-6 py-3 font-display text-[0.95rem] font-medium tracking-tight overflow-hidden isolate transition-colors duration-500 ease-[var(--ease-studio)]";

const variants: Record<Variant, string> = {
  solid:
    "bg-ink text-ivory before:bg-turmeric hover:text-ink focus-visible:text-ink",
  turmeric:
    "bg-turmeric text-ink before:bg-ink hover:text-ivory focus-visible:text-ivory",
  outline:
    "border border-current before:bg-ink hover:text-ivory focus-visible:text-ivory",
  ghost: "px-0! py-1! min-h-0! justify-start! before:hidden",
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
  variant?: Variant;
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

export function buttonClasses(variant: Variant = "solid", className = "") {
  return `${base} ${sweep} ${variants[variant]} ${className}`;
}
