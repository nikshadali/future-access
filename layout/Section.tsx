import { cn } from "@/lib/utils"

type Props = {
  children: React.ReactNode
  className?: string
  variant?: "default" | "dark" | "muted" | "accent"
  id?: string
}

const variantStyles: Record<NonNullable<Props["variant"]>, string> = {
  default: "",
  dark: "bg-surface-dark text-white",
  muted: "bg-muted",
  accent: "bg-accent",
}

export function Section({ children, className, variant = "default", id }: Props) {
  return (
    <section
      id={id}
      className={cn(
        "py-16 sm:py-20 lg:py-28 px-6 md:px-[8%] bg-background/40",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </section>
  )
}
