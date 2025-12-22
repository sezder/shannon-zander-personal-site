export function SpacerLine({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-t border-neutral-200 dark:border-neutral-800 pt-4">
      {children}
    </div>
  )
}
