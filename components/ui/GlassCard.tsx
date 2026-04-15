import { forwardRef } from "react";

type Variant = "default" | "strong" | "subtle" | "dark";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  variant?: Variant;
  as?: React.ElementType;
}

const variants: Record<Variant, string> = {
  default: "glass",
  strong: "glass-strong",
  subtle: "glass-subtle",
  dark: "glass-dark",
};

export const GlassCard = forwardRef<HTMLDivElement, Props>(function GlassCard(
  { variant = "default", className = "", children, ...rest },
  ref
) {
  return (
    <div
      ref={ref}
      className={`relative grain rounded-[var(--radius-glass)] ${variants[variant]} ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
});
