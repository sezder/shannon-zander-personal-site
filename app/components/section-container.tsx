export function SectionContainer({ 
  children, 
  className = '' 
}: { 
  children: React.ReactNode
  className?: string 
}) {
  return (
    <div className={`px-10 sm:px-12 md:px-16 lg:px-[20vw] xl:px-[20vw] ${className}`}>
      {children}
    </div>
  )
}
