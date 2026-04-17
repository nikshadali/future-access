export function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto py-12 sm:py-16 lg:py-24 max-w-7xl px-6 lg:px-8">
      {children}
    </div>
  )
}