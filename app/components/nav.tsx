'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { SocialLinkItems } from './social-link-items'

const navItems = {
  '/': {
    name: 'Home',
  },
  '/technical-deep-dives': {
    name: 'Technical Deep Dives',
  },
  '/hiring': {
    name: "Hiring?",
  },
}

export function Navbar() {
  const pathname = usePathname()

  return (
    <aside className="mb-12 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-center justify-between gap-1 md:gap-2 border-b border-neutral-200 dark:border-neutral-800 pb-3"
          id="nav"
        >
          <div className="flex items-center gap-1 md:gap-2">
            {Object.entries(navItems).map(([path, { name }]) => {
              const isActive = pathname === path || (path !== '/' && pathname?.startsWith(path))
              return (
                <Link
                  key={path}
                  href={path}
                  className={`
                    group relative px-3 py-1.5 text-sm font-medium transition-all
                    ${isActive
                      ? 'text-neutral-900 dark:text-neutral-100'
                      : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100'
                    }
                  `}
                >
                  <span className="relative z-10">{name}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-neutral-900 dark:bg-neutral-100" />
                  )}
                  {!isActive && (
                    <span className="absolute inset-0 bg-neutral-100 dark:bg-neutral-900 rounded-md opacity-0 group-hover:opacity-100 transition-opacity -z-0" />
                  )}
                </Link>
              )
            })}
          </div>
          <div className="hidden md:flex items-center gap-2">
            <SocialLinkItems 
              tooltipPosition="top"
              variant="navbar"
              linkClassName="focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-600"
            />
          </div>
        </nav>
      </div>
    </aside>
  )
}
