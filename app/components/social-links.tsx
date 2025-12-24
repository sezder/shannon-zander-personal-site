'use client'

import { SocialLinkItems } from './social-link-items'

export function SocialLinks() {
  return (
    <div className="hidden md:flex fixed top-28 right-2 sm:right-4 lg:right-8 z-10 flex-col gap-3">
      <SocialLinkItems 
        tooltipPosition="right"
        linkClassName="focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-600"
      />
    </div>
  )
}
