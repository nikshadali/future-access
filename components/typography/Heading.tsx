import { cn } from "@/lib/utils"

export function Heading({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn("space-y-5 text-center mb-16", className)}>
      {children}
    </div>
  )
}

export function HeadingTitle({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <h2
      className={cn(
        "text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.3] md:leading-tight text-foreground",
        className
      )}
    >
      {children}
    </h2>
  )
}

export function HeadingDescription({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <p
      className={cn(
        "mx-auto max-w-3xl text-base lg:text-lg font-normal text-muted-foreground leading-relaxed",
        className
      )}
    >
      {children}
    </p>
  )
}
