'use client'

import { useEffect, useState } from 'react'
import { createHighlighter } from 'shiki'

interface CodeBlockProps {
  code: string
  language: string
  filename?: string
}

export function CodeBlock({ code, language, filename }: CodeBlockProps) {
  const [html, setHtml] = useState<string>('')
  const [isLoading, setIsLoading] = useState(true)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // Detect dark mode - check for 'dark' class on html element or prefers-color-scheme
    const checkDarkMode = () => {
      const htmlElement = document.documentElement
      const hasDarkClass = htmlElement.classList.contains('dark')
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      return hasDarkClass || prefersDark
    }

    setIsDark(checkDarkMode())

    // Watch for class changes
    const observer = new MutationObserver(() => {
      setIsDark(checkDarkMode())
    })
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    })

    // Also watch for system preference changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = () => setIsDark(checkDarkMode())
    mediaQuery.addEventListener('change', handleChange)

    return () => {
      observer.disconnect()
      mediaQuery.removeEventListener('change', handleChange)
    }
  }, [])

  useEffect(() => {
    let mounted = true

    async function highlight() {
      try {
        const highlighter = await createHighlighter({
          themes: ['github-light', 'github-dark'],
          langs: [language],
        })

        if (!mounted) return

        const theme = isDark ? 'github-dark' : 'github-light'
        const highlighted = highlighter.codeToHtml(code, {
          lang: language,
          theme,
        })

        setHtml(highlighted)
        setIsLoading(false)
      } catch (error) {
        console.error('Error highlighting code:', error)
        if (mounted) {
          setHtml(`<pre><code>${code}</code></pre>`)
          setIsLoading(false)
        }
      }
    }

    highlight()

    return () => {
      mounted = false
    }
  }, [code, language, isDark])

  if (isLoading) {
    return (
      <div className="my-4 rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-800">
        {filename && (
          <div className="px-4 py-2 bg-neutral-100 dark:bg-neutral-800 border-b border-neutral-200 dark:border-neutral-700">
            <span className="text-xs font-mono text-neutral-600 dark:text-neutral-400">
              {filename}
            </span>
          </div>
        )}
        <div className="p-4 bg-neutral-50 dark:bg-neutral-900">
          <pre className="text-sm font-mono text-neutral-500 dark:text-neutral-400">
            <code>{code}</code>
          </pre>
        </div>
      </div>
    )
  }

  return (
    <div className="my-4 rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-800">
      {filename && (
        <div className="px-4 py-2 bg-neutral-100 dark:bg-neutral-800 border-b border-neutral-200 dark:border-neutral-700">
          <span className="text-xs font-mono text-neutral-600 dark:text-neutral-400">
            {filename}
          </span>
        </div>
      )}
      <div
        className="overflow-x-auto [&_pre]:!m-0 [&_pre]:!p-4 [&_pre]:!bg-transparent [&_pre]:!text-sm [&_pre]:!font-mono"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  )
}
