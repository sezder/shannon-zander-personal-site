'use client'

import { SocialLinkItems } from './social-link-items'

export default function Footer() {
  return (
    <footer className="mt-auto mb-16 md:relative">
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-black border-t border-neutral-200 dark:border-neutral-800 py-4 flex flex-row gap-3 justify-center z-10">
        <SocialLinkItems tooltipPosition="top" />
      </div>
      <p className="hidden md:block mt-8 text-neutral-600 dark:text-neutral-300">
        © {new Date().getFullYear()} Shannon Zander
      </p>
    </footer>
  )
}
