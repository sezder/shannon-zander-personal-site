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

export default function Footer() {
  return (
    <footer className="mt-auto mb-16 px-10 sm:px-12 md:px-16 lg:px-[20vw] xl:px-[20vw] md:relative">
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-black border-t border-neutral-200 dark:border-neutral-800 py-4 flex flex-row gap-3 justify-center z-10">
        <a
          href="https://github.com/sezder"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative w-10 h-10 rounded-full border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex items-center justify-center hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors"
          aria-label="GitHub"
          title=""
        >
          <FontAwesomeIcon
            icon={faGithub}
            className="w-5 h-5 text-black dark:text-white"
            aria-hidden="true"
          />
          <span className="absolute bottom-full mb-3 px-2 py-1 text-xs font-medium text-white bg-neutral-900 dark:bg-neutral-100 dark:text-neutral-900 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 group-focus:opacity-100 pointer-events-none transition-opacity">
            GitHub
          </span>
        </a>
        <a
          href="https://www.linkedin.com/in/shannon-e-zander/"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative w-10 h-10 rounded-full border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex items-center justify-center hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors"
          aria-label="LinkedIn"
          title=""
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            className="w-5 h-5 text-black dark:text-white"
            aria-hidden="true"
          />
          <span className="absolute bottom-full mb-3 px-2 py-1 text-xs font-medium text-white bg-neutral-900 dark:bg-neutral-100 dark:text-neutral-900 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 group-focus:opacity-100 pointer-events-none transition-opacity">
            LinkedIn
          </span>
        </a>
        <a
          href="https://wellfound.com/u/shannon-zander"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative w-10 h-10 rounded-full border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex items-center justify-center hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors"
          aria-label="Wellfound"
          title=""
        >
          <WellfoundIcon />
          <span className="absolute bottom-full mb-3 px-2 py-1 text-xs font-medium text-white bg-neutral-900 dark:bg-neutral-100 dark:text-neutral-900 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 group-focus:opacity-100 pointer-events-none transition-opacity">
            Wellfound
          </span>
        </a>
        <a
          href="mailto:shannon.e.zander@gmail.com"
          className="group relative w-10 h-10 rounded-full border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex items-center justify-center hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors"
          aria-label="Email"
          title=""
        >
          <FontAwesomeIcon
            icon={faEnvelope}
            className="w-5 h-5 text-black dark:text-white"
            aria-hidden="true"
          />
          <span className="absolute bottom-full mb-3 px-2 py-1 text-xs font-medium text-white bg-neutral-900 dark:bg-neutral-100 dark:text-neutral-900 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 group-focus:opacity-100 pointer-events-none transition-opacity">
            Email
          </span>
        </a>
        <a
          href="/Shannon Zander Resume.pdf"
          download
          className="group relative w-10 h-10 rounded-full border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex items-center justify-center hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors"
          title=""
        >
          <FontAwesomeIcon
            icon={faDownload}
            className="w-5 h-5 text-black dark:text-white"
            aria-hidden="true"
          />
          <span className="absolute bottom-full mb-3 px-2 py-1 text-xs font-medium text-white bg-neutral-900 dark:bg-neutral-100 dark:text-neutral-900 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 group-focus:opacity-100 pointer-events-none transition-opacity">
            Resume
          </span>
        </a>
      </div>
      <p className="hidden md:block mt-8 text-neutral-600 dark:text-neutral-300">
        © {new Date().getFullYear()} Shannon Zander
      </p>
    </footer>
  )
}
