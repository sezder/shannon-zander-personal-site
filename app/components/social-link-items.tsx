'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faDownload } from '@fortawesome/free-solid-svg-icons'

function WellfoundIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className="text-black dark:text-white"
    >
      <path
        d="M23.998 8.128c0.063 -1.379 -1.612 -2.376 -2.795 -1.664 -1.23 0.598 -1.322 2.52 -0.156 3.234 1.2 0.862 2.995 -0.09 2.951 -1.57zm0 7.748c0.063 -1.38 -1.612 -2.377 -2.795 -1.665 -1.23 0.598 -1.322 2.52 -0.156 3.234 1.2 0.863 2.995 -0.09 2.951 -1.57zm-20.5 1.762L0 6.364h3.257l2.066 8.106 2.245 -8.106h3.267l2.244 8.106 2.065 -8.106h3.257l-3.54 11.274H11.39c-0.73 -2.713 -1.46 -5.426 -2.188 -8.14l-2.233 8.14H3.5z"
        fill="currentColor"
      />
    </svg>
  )
}

interface SocialLinkItemsProps {
  tooltipPosition?: 'right' | 'top'
  linkClassName?: string
}

export function SocialLinkItems({ tooltipPosition = 'right', linkClassName = '' }: SocialLinkItemsProps) {
  const tooltipClasses = tooltipPosition === 'right' 
    ? 'absolute right-full mr-3 px-2 py-1 text-xs font-medium text-white bg-neutral-900 dark:bg-neutral-100 dark:text-neutral-900 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 group-focus:opacity-100 pointer-events-none transition-opacity'
    : 'absolute bottom-full mb-3 px-2 py-1 text-xs font-medium text-white bg-neutral-900 dark:bg-neutral-100 dark:text-neutral-900 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 group-focus:opacity-100 pointer-events-none transition-opacity'

  const baseLinkClasses = "group relative w-10 h-10 rounded-full border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex items-center justify-center hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors"

  return (
    <>
      <a
        href="https://github.com/sezder"
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseLinkClasses} ${linkClassName}`}
        aria-label="GitHub"
        title=""
      >
        <FontAwesomeIcon
          icon={faGithub}
          className="w-5 h-5 text-black dark:text-white"
          aria-hidden="true"
        />
        <span className={tooltipClasses}>
          GitHub
        </span>
      </a>
      <a
        href="https://www.linkedin.com/in/shannon-e-zander/"
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseLinkClasses} ${linkClassName}`}
        aria-label="LinkedIn"
        title=""
      >
        <FontAwesomeIcon
          icon={faLinkedin}
          className="w-5 h-5 text-black dark:text-white"
          aria-hidden="true"
        />
        <span className={tooltipClasses}>
          LinkedIn
        </span>
      </a>
      <a
        href="https://wellfound.com/u/shannon-zander"
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseLinkClasses} ${linkClassName}`}
        aria-label="Wellfound"
        title=""
      >
        <WellfoundIcon />
        <span className={tooltipClasses}>
          Wellfound
        </span>
      </a>
      <a
        href="mailto:shannon.e.zander@gmail.com"
        className={`${baseLinkClasses} ${linkClassName}`}
        aria-label="Email"
        title=""
      >
        <FontAwesomeIcon
          icon={faEnvelope}
          className="w-5 h-5 text-black dark:text-white"
          aria-hidden="true"
        />
        <span className={tooltipClasses}>
          Email
        </span>
      </a>
      <a
        href="/shannon_zander_resume.pdf"
        download
        className={`${baseLinkClasses} ${linkClassName}`}
        aria-label="Download Resume"
        title="Download Resume"
      >
        <FontAwesomeIcon
          icon={faDownload}
          className="w-5 h-5 text-black dark:text-white"
          aria-hidden="true"
        />
        <span className={tooltipClasses}>
          Resume
        </span>
      </a>
    </>
  )
}

