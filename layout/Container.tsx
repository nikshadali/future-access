import { cn } from "@/lib/utils"

type Props = {
  children: React.ReactNode
  className?: string
}

export function Container({ children, className }: Props) {
  return (
    <div
      className={cn(
        "mx-auto w-full",
        className
      )}
    >
      {children}
    </div>
  )
}