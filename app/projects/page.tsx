'use client'

import { useState } from 'react'
import { SectionContainer } from '../components/section-container'

function ChevronIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <svg
      className={`w-5 h-5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 9l-7 7-7-7"
      />
    </svg>
  )
}

function ProjectSection({
  title,
  isOpen,
  onToggle,
  children,
}: {
  title: string
  isOpen: boolean
  onToggle: () => void
  children: React.ReactNode
}) {
  return (
    <div className="bg-white dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-800 mb-4">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-4 text-left hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
      >
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
          {title}
        </h3>
        <ChevronIcon isOpen={isOpen} />
      </button>
      {isOpen && (
        <div className="px-4 pb-4 text-neutral-700 dark:text-neutral-300">
          {children}
        </div>
      )}
    </div>
  )
}

export default function ProjectsPage() {
  const [openSections, setOpenSections] = useState<Set<number>>(new Set([0]))

  const toggleSection = (index: number) => {
    const newOpenSections = new Set(openSections)
    if (newOpenSections.has(index)) {
      newOpenSections.delete(index)
    } else {
      newOpenSections.add(index)
    }
    setOpenSections(newOpenSections)
  }

  const projects = [
    {
      title: 'History Table Migration',
      content: (
        <div className="space-y-4">
          <p>
            Migrated historical data from legacy systems to a new normalized schema while maintaining data integrity and zero downtime.
          </p>
          <p>
            This project involved migrating millions of records across multiple database tables, ensuring referential integrity and implementing rollback strategies.
          </p>
        </div>
      ),
    },
    {
      title: 'Stripe Migration',
      content: (
        <div className="space-y-4">
          <p>
            Migrated payment processing infrastructure to Stripe, handling subscription management, billing cycles, and payment methods.
          </p>
          <p>
            Implemented webhook handlers, idempotency keys, and comprehensive error handling to ensure reliable payment processing.
          </p>
        </div>
      ),
    },
    {
      title: 'Revere Expansion of TAM by 300% through Investor Dashboard',
      content: (
        <div className="space-y-4">
          <p>
            Built an investor dashboard that expanded Revere's Total Addressable Market (TAM) by 300% by enabling new investor workflows and data visualization.
          </p>
          <p>
            The dashboard provided real-time analytics, portfolio management tools, and reporting capabilities that attracted a new segment of institutional investors.
          </p>
        </div>
      ),
    },
    {
      title: 'Relay Connections Handler',
      content: (
        <div className="space-y-4">
          <p>
            Implemented GraphQL Relay connections handler for efficient pagination and cursor-based navigation.
          </p>
          <p>
            Built a robust system for handling Relay-style connections, including edge cursors, pageInfo, and optimized query performance for large datasets.
          </p>
        </div>
      ),
    },
    {
      title: 'Churn Flow Project',
      content: (
        <div className="space-y-4">
          <p>
            Built a comprehensive churn flow system to manage customer subscription cancellations and retention workflows.
          </p>
          <p>
            Implemented automated churn detection, cancellation flows, and retention strategies integrated with billing systems to reduce customer churn and improve retention rates.
          </p>
        </div>
      ),
    },
  ]

  return (
    <section>
      <SectionContainer>
        <h1 className="mb-8 text-2xl font-semibold tracking-tighter">Projects</h1>
        <div className="space-y-4">
          {projects.map((project, index) => (
            <ProjectSection
              key={index}
              title={project.title}
              isOpen={openSections.has(index)}
              onToggle={() => toggleSection(index)}
            >
              {project.content}
            </ProjectSection>
          ))}
        </div>
      </SectionContainer>
    </section>
  )
}
