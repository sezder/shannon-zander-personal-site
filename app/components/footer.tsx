'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

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

export default function Footer() {
  return (
    <footer className="mt-auto mb-16 px-10 sm:px-12 md:px-16 lg:px-[20vw] xl:px-[20vw] md:relative">
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-black border-t border-neutral-200 dark:border-neutral-800 py-4 flex flex-row gap-3 justify-center z-10">
        <a
          href="https://github.com/sezder"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex items-center justify-center hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors"
          aria-label="GitHub"
        >
          <FontAwesomeIcon
            icon={faGithub}
            className="w-5 h-5 text-black dark:text-white"
            aria-hidden="true"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/shannon-e-zander/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex items-center justify-center hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors"
          aria-label="LinkedIn"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            className="w-5 h-5 text-black dark:text-white"
            aria-hidden="true"
          />
        </a>
        <a
          href="https://wellfound.com/u/shannon-zander"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex items-center justify-center hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors"
          aria-label="Wellfound"
        >
          <WellfoundIcon />
        </a>
        <a
          href="mailto:shannon.e.zander@gmail.com"
          className="w-10 h-10 rounded-full border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex items-center justify-center hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors"
          aria-label="Email"
        >
          <FontAwesomeIcon
            icon={faEnvelope}
            className="w-5 h-5 text-black dark:text-white"
            aria-hidden="true"
          />
        </a>
      </div>
      <p className="hidden md:block mt-8 text-neutral-600 dark:text-neutral-300">
        © {new Date().getFullYear()} Shannon Zander
      </p>
    </footer>
  )
}
