import { cn } from "@/lib/utils"

type Props = {
  children: React.ReactNode
  className?: string
}

export function SubHeading({ children, className }: Props) {
  return (
    <p
      className={cn(
        "mt-6 max-w-2xl text-center text-lg text-white/70 mx-auto",
        className
      )}
    >
      {children}
    </p>
  )
}