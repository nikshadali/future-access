import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type FinanceButtonProps = {
  label: string;
  className?: string;
};

export function FinanceButton({
  label,
  className,
}: FinanceButtonProps) {
  return (
   <button
  className={cn(
    "group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full border border-primary bg-primary px-7 text-sm font-semibold text-primary-foreground transition-all duration-500",
    className
  )}
>
  {/* Expanding White Background From Dot */}
  <span className="absolute left-0 h-3 w-3 rounded-full bg-white transition-all duration-700 ease-out group-hover:h-full group-hover:w-full" />

  <span className="relative z-10 flex items-center gap-3 transition-colors duration-500 group-hover:text-foreground">
    <span className="h-3 w-3 rounded-full bg-white" />

    <span>{label}</span>

    <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
  </span>
</button>
  );
}


import { ArrowUpRight } from "lucide-react";


type AnimatedButtonProps = {
  label: string;
  className?: string;
  type?: "button" | "submit" | "reset";
};

export function AnimatedButton({
  label,
  className,
  type = "button",
}: AnimatedButtonProps) {
  return (
    <button
      className={cn(
        "group relative inline-flex h-12 items-center justify-center gap-3 overflow-hidden rounded-full border border-primary bg-primary hover:border-background px-5 text-sm font-medium text-primary-foreground transition-all duration-500 hover:shadow-[0_10px_30px_rgba(var(--shadow-primary),0.25)] hover:bg-background dark:border-transparent dark:hover:border-primary/30",
        className
      )}
      type={type}
    >
      {/* Expanding Background */}
      <span className="absolute right-4 z-0 h-6 w-6 rounded-full bg-background transition-transform  duration-700 ease-out group-hover:scale-[18]" />

      {/* Label */}
      <span className="relative z-10 transition-colors duration-500 group-hover:text-foreground">
        {label}
      </span>

      {/* Icon Wrapper */}
      <span className="relative z-10 flex h-5 w-5 items-center justify-center rounded-full bg-background text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-background">
        <ArrowUpRight className="h-3 w-3 transition-transform duration-500 group-hover:rotate-45" />
      </span>
    </button>
  );
}

export function BlackAnimatedButton({
  label,
  className,
  type = "button",
}: AnimatedButtonProps) {
  return (
    <button
      className={cn(
        "group relative inline-flex h-12 items-center justify-center gap-3 overflow-hidden rounded-full border border-[#010101]/70 bg-[#010101] hover:border-[#010101] px-5 text-sm font-medium text-white-foreground transition-all duration-500 hover:shadow-[0_10px_30px_rgba(var(--shadow-primary),0.25)] hover:bg-background dark:border-transparent dark:hover:border-primary/30",
        className
      )}
      type={type}
    >
      {/* Expanding Background */}
      <span className="absolute right-4 z-0 h-6 w-6 flex items-center justify-center rounded-full bg-primary transition-transform  duration-700 ease-out group-hover:scale-[18]" />

      {/* Label */}
      <span className="relative z-10 transition-colors duration-500 group-hover:text-foreground">
        {label}
      </span>

      {/* Icon Wrapper */}
      <span className="relative z-10 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-background">
        <ArrowUpRight className="h-3 w-3 text-[#010101] hover:text-white transition-transform duration-500 group-hover:rotate-45" />
      </span>
    </button>
  );
}