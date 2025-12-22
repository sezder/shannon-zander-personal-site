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
      title: 'Partitioning a 2B-Row Table: Why the Base Table Still Won',
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="text-xl font-semibold mb-3 mt-4">Overview</h4>
            <h5 className="text-base font-semibold mt-4 mb-2">The Question</h5>
            <p>
              I evaluated whether an expenses table approaching <strong>approximately two billion rows</strong> should be migrated to a native MySQL partitioned design. Using production-shaped data and real workloads, I tested multiple partitioning strategies, composite index designs, and primary key orderings.
            </p>
            <h5 className="text-base font-semibold mt-4 mb-2">The Outcome</h5>
            <p>
              The outcome was not that partitioning failed. Instead, the testing showed that even under aggressive optimization, the existing unpartitioned table remained <strong>highly competitive and, in several cases, superior</strong>. Based on these results, I chose to defer partitioning.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-3 mt-4">Background: Year-Based Tables</h4>
            <h5 className="text-base font-semibold mt-4 mb-2">The Previous Approach</h5>
            <p>
              Prior to this work, we used separate year-based tables such as <code className="bg-neutral-100 dark:bg-neutral-800 px-1 rounded">expenses_2022</code> and <code className="bg-neutral-100 dark:bg-neutral-800 px-1 rounded">expenses_2023</code> as a form of unofficial partitioning. While workable at smaller scale, this approach introduced increasing operational costs.
            </p>
            <h5 className="text-base font-semibold mt-4 mb-2">Operational Challenges</h5>
            <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
              <li>Applications required <strong>complex query logic</strong> to support cross-year access</li>
              <li><strong>Schema changes had to be coordinated</strong> across multiple tables</li>
              <li>MySQL could not perform <strong>native partition pruning</strong>, which forced manual routing logic in application code</li>
              <li>Over time, this also increased the <strong>risk of schema drift</strong></li>
            </ul>
            <h5 className="text-base font-semibold mt-4 mb-2">The Opportunity</h5>
            <p>
              Native partitioning was an attractive alternative if it could deliver both <strong>performance improvements and operational simplicity</strong>.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-3 mt-4">What I Tested</h4>
            <h5 className="text-base font-semibold mt-4 mb-2">Test Setup</h5>
            <p>
              Using approximately <strong>twenty million rows per table</strong> and representative users with roughly <strong>twenty-two thousand rows each</strong>, I benchmarked the following:
            </p>
            <h5 className="text-base font-semibold mt-4 mb-2">Test Configurations</h5>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>The original unpartitioned table</li>
              <li>Year-partitioned tables with optimized composite indexes</li>
              <li>Multiple primary key orderings, including <code className="bg-neutral-100 dark:bg-neutral-800 px-1 rounded">(year, transaction_id)</code> and <code className="bg-neutral-100 dark:bg-neutral-800 px-1 rounded">(transaction_id, year)</code></li>
              <li>Mixed workloads including user-scoped reads, multi-year date range queries, complex filters, bulk and individual <code className="bg-neutral-100 dark:bg-neutral-800 px-1 rounded">UPDATE</code>s, and sequential <code className="bg-neutral-100 dark:bg-neutral-800 px-1 rounded">INSERT</code>s</li>
            </ul>
            <h5 className="text-base font-semibold mt-4 mb-2">Measurement Methodology</h5>
            <p>
              All tests were run with warm caches and measured using <code className="bg-neutral-100 dark:bg-neutral-800 px-1 rounded">EXPLAIN ANALYZE</code>.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-3 mt-4">Key Result</h4>
            <h5 className="text-base font-semibold mt-4 mb-2">Overall Finding</h5>
            <p>
              Partitioning <strong>did not produce a clear, across-the-board performance improvement</strong>.
            </p>
            <h5 className="text-base font-semibold mt-4 mb-2">Detailed Analysis</h5>
            <p>
              Even with year-based partition pruning, carefully tuned composite indexes, and alternative primary key orderings, the unpartitioned table consistently performed within the same range and <strong>often performed better for critical queries</strong>.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-3 mt-4">Where the Base Table Remained Competitive</h4>
            <h5 className="text-base font-semibold mt-4 mb-2">User- and Date-Scoped <code className="bg-neutral-100 dark:bg-neutral-800 px-1 rounded">SELECT</code>s</h5>
            <p>
              For the dominant access pattern, user-scoped reads over date ranges, the base table was either <strong>faster or within ten to twenty milliseconds</strong> of the best-performing partitioned variant. <strong>Strong indexing on <code className="bg-neutral-100 dark:bg-neutral-800 px-1 rounded">(user_id, date)</code> significantly reduced</strong> the theoretical advantage of partition pruning.
            </p>
            <h5 className="text-base font-semibold mt-4 mb-2"><code className="bg-neutral-100 dark:bg-neutral-800 px-1 rounded">UPDATE</code> Operations</h5>
            <p>
              <strong><code className="bg-neutral-100 dark:bg-neutral-800 px-1 rounded">UPDATE</code> performance provided the strongest signal</strong>. One partitioned configuration degraded <code className="bg-neutral-100 dark:bg-neutral-800 px-1 rounded">UPDATE</code> operations <strong>from milliseconds to more than thirty seconds</strong>. Even the safer partitioned variants showed no meaningful improvement over the base table. The unpartitioned table remained <strong>predictable and stable</strong> under write load.
            </p>
            <h6 className="text-sm font-medium mt-3 mb-1 text-neutral-600 dark:text-neutral-400">Key Insight</h6>
            <p>
              This reinforced an important conclusion: <strong>A well-indexed unpartitioned table can outperform a partitioned table with an imperfect primary key, even at large scale</strong>.
            </p>
            <h5 className="text-base font-semibold mt-4 mb-2"><code className="bg-neutral-100 dark:bg-neutral-800 px-1 rounded">INSERT</code> Workloads</h5>
            <p>
              Sequential ingestion performance was comparable across all configurations. Partitioning did not provide a material advantage, and the base table handled sustained inserts without issue.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-3 mt-4">Decision</h4>
            <h5 className="text-base font-semibold mt-4 mb-2">The Conventional Wisdom</h5>
            <p>
              Partitioning is often treated as an obvious scalability step. In this case, <strong>the data showed otherwise</strong>.
            </p>
            <h5 className="text-base font-semibold mt-4 mb-2">What the Data Showed</h5>
            <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
              <li><strong>Index design had a larger impact on performance than partitioning</strong></li>
              <li>Primary key ordering introduced meaningful risk</li>
              <li>The existing table already exhibited <strong>strong and predictable performance characteristics</strong></li>
              <li>Partitioning added <strong>new failure modes without delivering clear gains</strong></li>
            </ul>
            <h5 className="text-base font-semibold mt-4 mb-2">The Decision</h5>
            <p>
              Given these tradeoffs, I deferred partitioning because <strong>it was not justified by measured results</strong>.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-3 mt-4">Conclusion</h4>
            <h5 className="text-base font-semibold mt-4 mb-2">Summary</h5>
            <p>
              After testing optimized composite indexes, multiple partitioning strategies, and different primary key orderings, the original unpartitioned table remained <strong>competitive, stable, and predictable</strong>.
            </p>
            <h5 className="text-base font-semibold mt-4 mb-2">Future Considerations</h5>
            <p>
              Partitioning remains a viable future step. It will be revisited once it offers <strong>clear and measurable advantages</strong> over a well-designed base table.
            </p>
          </div>
        </div>
      ),
    },
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
