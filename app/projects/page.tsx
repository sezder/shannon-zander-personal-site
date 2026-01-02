'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { SectionContainer } from '../components/section-container'
import { CodeBlock } from '../components/code-block'
import { SpacerLine } from '../components/spacer-line'

function ChevronIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <svg
      className={`w-5 h-5 transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-180' : ''}`}
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
  skills,
  isOpen,
  onToggle,
  children,
}: {
  title: string
  skills?: string[]
  isOpen: boolean
  onToggle: () => void
  children: React.ReactNode
}) {
  return (
    <div className="bg-white dark:bg-neutral-900 rounded-lg">
      <button
        onClick={onToggle}
        className={`w-full flex items-center justify-between text-left cursor-pointer transition-all duration-300 ease-in-out border-l-[3px] ${
          isOpen 
            ? 'border-black dark:border-white pl-[calc(1rem+3px)] pr-4 py-4' 
            : 'border-transparent p-4 hover:bg-neutral-50 dark:hover:bg-neutral-800'
        }`}
      >
        <h3 className={`text-lg transition-all duration-300 ${
          isOpen 
            ? 'text-neutral-900 dark:text-neutral-100 font-bold' 
            : 'text-neutral-700 dark:text-neutral-300 font-semibold'
        }`}>
          {title}
        </h3>
        <ChevronIcon isOpen={isOpen} />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? 'max-h-[10000px] opacity-100 translate-y-0'
            : 'max-h-0 opacity-0 -translate-y-2'
        }`}
      >
        <div className={`pb-4 pr-4 pl-[calc(1rem+3px)] text-neutral-700 dark:text-neutral-300 border-l-[3px] transition-colors duration-300 ease-in-out ${
          isOpen 
            ? 'border-black dark:border-white' 
            : 'border-transparent'
        }`}>
          {skills && skills.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-4">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-white dark:bg-white text-black dark:text-black border border-neutral-300 dark:border-neutral-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}
          {children}
        </div>
      </div>
    </div>
  )
}

function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const images = [
    { src: '/survey.png', alt: 'Cancellation survey screen' },
    { src: '/switch-to-tax-filing.png', alt: 'Switch to standard tax filing offer screen' },
    { src: '/timeline.png', alt: 'Payment pause offer timeline screen' },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 3000) // Auto-advance every 3 seconds

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div className="relative">
      <div className="relative overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-800">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="min-w-full flex-shrink-0">
              <Image
                src={image.src}
                alt={image.alt}
                width={1080}
                height={1920}
                className="w-full h-auto max-h-[70vh] object-contain mx-auto"
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex
                ? 'bg-black dark:bg-white'
                : 'bg-neutral-400 dark:bg-neutral-600 hover:shadow-[0_0_0_2px_black] dark:hover:shadow-[0_0_0_2px_white]'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
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
      title: 'Partitioning a 2 bil-row table: why the base table still won',
      skills: ['MySQL', 'Database Optimization', 'Performance Testing', 'SQL'],
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="text-xl font-semibold mb-3 mt-4">Overview</h4>
            <h5 className="text-lg font-semibold mt-4 mb-3">The question</h5>
            <p>
              I evaluated whether an expenses table approaching <strong>approximately two billion rows</strong> should be migrated to a native MySQL partitioned design. Using production-shaped data and real workloads, I tested multiple partitioning strategies, composite index designs, and primary key orderings.
            </p>
            <h5 className="text-lg font-semibold mt-4 mb-3">The outcome</h5>
            <p>
              The outcome was not that partitioning failed. Instead, the testing showed that even under aggressive optimization, the existing unpartitioned table remained <strong>highly competitive and, in several cases, superior</strong>. Based on these results, I chose to defer partitioning.
            </p>
          </div>

          <SpacerLine>
            <div>
              <h4 className="text-xl font-semibold mb-3 mt-4">Background: year-based tables</h4>
            <h5 className="text-lg font-semibold mt-4 mb-3">The previous approach</h5>
            <p>
              Prior to this work, we used separate year-based tables such as <code className="bg-neutral-100 dark:bg-neutral-800 px-1 rounded">expenses_2022</code> and <code className="bg-neutral-100 dark:bg-neutral-800 px-1 rounded">expenses_2023</code> as a form of unofficial partitioning. While workable at smaller scale, this approach introduced increasing operational costs.
            </p>
            <h5 className="text-lg font-semibold mt-4 mb-3">Operational challenges</h5>
            <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
              <li>Applications required <strong>complex query logic</strong> to support cross-year access</li>
              <li><strong>Schema changes had to be coordinated</strong> across multiple tables</li>
              <li>MySQL could not perform <strong>native partition pruning</strong>, which forced manual routing logic in application code</li>
              <li>Over time, this also increased the <strong>risk of schema drift</strong></li>
            </ul>
            <h5 className="text-lg font-semibold mt-4 mb-3">The opportunity</h5>
            <p>
              Native partitioning was an attractive alternative if it could deliver both <strong>performance improvements and operational simplicity</strong>.
            </p>
            </div>
          </SpacerLine>

          <SpacerLine>
            <div>
              <h4 className="text-xl font-semibold mb-3 mt-4">What I tested</h4>
            <h5 className="text-lg font-semibold mt-4 mb-3">Test setup</h5>
            <p>
              Using approximately <strong>twenty million rows per table</strong> and representative users with roughly <strong>twenty-two thousand rows each</strong>, I benchmarked the following:
            </p>
            <h5 className="text-lg font-semibold mt-4 mb-3">Test configurations</h5>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>The original unpartitioned table</li>
              <li>Year-partitioned tables with optimized composite indexes</li>
              <li>Multiple primary key orderings, including <code className="bg-neutral-100 dark:bg-neutral-800 px-1 rounded">(year, transaction_id)</code> and <code className="bg-neutral-100 dark:bg-neutral-800 px-1 rounded">(transaction_id, year)</code></li>
              <li>Mixed workloads including user-scoped reads, multi-year date range queries, complex filters, bulk and individual <code className="bg-neutral-100 dark:bg-neutral-800 px-1 rounded">UPDATE</code>s, and sequential <code className="bg-neutral-100 dark:bg-neutral-800 px-1 rounded">INSERT</code>s</li>
            </ul>
            <h5 className="text-lg font-semibold mt-4 mb-3">Measurement methodology</h5>
            <p>
              All tests were run with warm caches and measured using <code className="bg-neutral-100 dark:bg-neutral-800 px-1 rounded">EXPLAIN ANALYZE</code>.
            </p>
            </div>
          </SpacerLine>

          <SpacerLine>
            <div>
              <h4 className="text-xl font-semibold mb-3 mt-4">Key result</h4>
            <h5 className="text-lg font-semibold mt-4 mb-3">Overall finding</h5>
            <p>
              Partitioning <strong>did not produce a clear, across-the-board performance improvement</strong>.
            </p>
            <h5 className="text-lg font-semibold mt-4 mb-3">Detailed analysis</h5>
            <p>
              Even with year-based partition pruning, carefully tuned composite indexes, and alternative primary key orderings, the unpartitioned table consistently performed within the same range and <strong>often performed better for critical queries</strong>.
            </p>
            </div>
          </SpacerLine>

          <SpacerLine>
            <div>
              <h4 className="text-xl font-semibold mb-3 mt-4">Where the base table remained competitive</h4>
            <h5 className="text-lg font-semibold mt-4 mb-3">User- and date-scoped <code className="bg-neutral-100 dark:bg-neutral-800 px-1 rounded">SELECT</code>s</h5>
            <p>
              For the dominant access pattern, user-scoped reads over date ranges, the base table was either <strong>faster or within ten to twenty milliseconds</strong> of the best-performing partitioned variant. <strong>Strong indexing on <code className="bg-neutral-100 dark:bg-neutral-800 px-1 rounded">(user_id, date)</code> significantly reduced</strong> the theoretical advantage of partition pruning.
            </p>
            <h5 className="text-lg font-semibold mt-4 mb-3"><code className="bg-neutral-100 dark:bg-neutral-800 px-1 rounded">UPDATE</code> operations</h5>
            <p>
              <strong><code className="bg-neutral-100 dark:bg-neutral-800 px-1 rounded">UPDATE</code> performance provided the strongest signal</strong>. One partitioned configuration degraded <code className="bg-neutral-100 dark:bg-neutral-800 px-1 rounded">UPDATE</code> operations <strong>from milliseconds to more than thirty seconds</strong>. Even the safer partitioned variants showed no meaningful improvement over the base table. The unpartitioned table remained <strong>predictable and stable</strong> under write load.
            </p>
            <h6 className="text-sm font-medium mt-3 mb-1 text-neutral-600 dark:text-neutral-400">Key insight</h6>
            <p>
              This reinforced an important conclusion: <strong>A well-indexed unpartitioned table can outperform a partitioned table with an imperfect primary key, even at large scale</strong>.
            </p>
            <h5 className="text-lg font-semibold mt-4 mb-3"><code className="bg-neutral-100 dark:bg-neutral-800 px-1 rounded">INSERT</code> workloads</h5>
            <p>
              Sequential ingestion performance was comparable across all configurations. Partitioning did not provide a material advantage, and the base table handled sustained inserts without issue.
            </p>
            </div>
          </SpacerLine>

          <SpacerLine>
            <div>
              <h4 className="text-xl font-semibold mb-3 mt-4">Decision</h4>
            <h5 className="text-lg font-semibold mt-4 mb-3">The conventional wisdom</h5>
            <p>
              Partitioning is often treated as an obvious scalability step. In this case, <strong>the data showed otherwise</strong>.
            </p>
            <h5 className="text-lg font-semibold mt-4 mb-3">What the data showed</h5>
            <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
              <li><strong>Index design had a larger impact on performance than partitioning</strong></li>
              <li>Primary key ordering introduced meaningful risk</li>
              <li>The existing table already exhibited <strong>strong and predictable performance characteristics</strong></li>
              <li>Partitioning added <strong>new failure modes without delivering clear gains</strong></li>
            </ul>
            <h5 className="text-lg font-semibold mt-4 mb-3">The decision</h5>
            <p>
              Given these tradeoffs, I deferred partitioning because <strong>it was not justified by measured results</strong>.
            </p>
            </div>
          </SpacerLine>

          <SpacerLine>
            <div>
              <h4 className="text-xl font-semibold mb-3 mt-4">Conclusion</h4>
            <h5 className="text-lg font-semibold mt-4 mb-3">Summary</h5>
            <p>
              After testing optimized composite indexes, multiple partitioning strategies, and different primary key orderings, the original unpartitioned table remained <strong>competitive, stable, and predictable</strong>.
            </p>
            <h5 className="text-lg font-semibold mt-4 mb-3">Future considerations</h5>
            <p>
              Partitioning remains a viable future step. It will be revisited once it offers <strong>clear and measurable advantages</strong> over a well-designed base table.
            </p>
            </div>
          </SpacerLine>
        </div>
      ),
    },
    {
      title: 'Production-Safe Large-Scale Data Migration (≈693M Rows)',
      skills: ['MySQL', 'TypeScript', 'GCP', 'CloudSQL', 'Data Migration', 'Database Engineering'],
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="text-xl font-semibold mb-3 mt-4">Overview</h4>
            <p>
              I designed and executed a <strong>zero-downtime, production-safe migration</strong> to consolidate two year-partitioned transaction tables (<code className="bg-neutral-100 dark:bg-neutral-800 px-1 rounded">expenses_2022</code>, <code className="bg-neutral-100 dark:bg-neutral-800 px-1 rounded">expenses_2023</code>) into a single archive table (<strong>~693M rows total</strong>).
            </p>
            <p>
              Rather than a one-off script, the migration was built as a <strong>self-regulating system</strong>: <strong>resumable</strong>, <strong>adaptive under load</strong>, <strong>observable in real time</strong>, and capable of <strong>safely shutting itself down</strong> if it threatened production stability. The system was designed to <strong>tolerate partial runs, retries, and duplicate data</strong> without requiring manual intervention.
            </p>
          </div>

          <SpacerLine>
            <div>
              <h4 className="text-xl font-semibold mb-3 mt-4">Key design decisions</h4>
            
            <div className="space-y-4">
              <div>
                <h5 className="text-lg font-semibold mt-4 mb-3">Colocated execution (VM + database)</h5>
                <p>
                  The migration ran on a <strong>dedicated VM</strong> deployed in the same <code className="bg-neutral-100 dark:bg-neutral-800 px-1 rounded">GCP</code> region and zone as the <code className="bg-neutral-100 dark:bg-neutral-800 px-1 rounded">CloudSQL</code> instance. This was a <strong>deliberate colocation choice</strong> to:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                  <li><strong>minimize network latency</strong></li>
                  <li><strong>avoid cross-zone egress costs</strong></li>
                  <li><strong>maximize sustained throughput</strong> for long-running batch operations</li>
                </ul>
              </div>

              <SpacerLine>
                <div>
                  <h5 className="text-lg font-semibold mt-4 mb-3">Cursor-based pagination (date-driven, monotonic)</h5>
                <p>
                  Instead of <code className="bg-neutral-100 dark:bg-neutral-800 px-1 rounded">OFFSET</code> pagination or repeated <code className="bg-neutral-100 dark:bg-neutral-800 px-1 rounded">COUNT</code> queries (which degrade badly at scale), the migration uses a <strong>monotonic, date-based cursor</strong>. Completion is determined by <strong>exhausting the source cursor</strong>, not by matching row counts.
                </p>
                <p>
                  This avoids <strong>full table scans</strong> and keeps <strong>batch performance stable</strong> as the dataset grows.
                </p>
                <CodeBlock
                  language="sql"
                  filename="cursor_pagination.sql"
                  code={`-- cursor-based pagination
SELECT date
FROM expenses_2023 USE INDEX (date_index)
WHERE date > :lastDate
ORDER BY date ASC, transaction_id ASC
LIMIT :batchSize;`}
                />
                <p className="mt-3">
                  To prevent silent infinite loops, the system explicitly detects <strong>cursor stagnation</strong> and fails fast:
                </p>
                <CodeBlock
                  language="typescript"
                  filename="cursor_stagnation.ts"
                  code={`const upperBound = result[result.length - 1]?.date;
if (upperBound === lastDate) {
  throw new Error('Cursor stagnation detected – aborting to prevent infinite loop');
}`}
                />
                <p className="mt-3">
                  <strong>Failing fast here is intentional</strong> and safer than continuing indefinitely.
                </p>
                </div>
              </SpacerLine>

              <SpacerLine>
                <div>
                  <h5 className="text-lg font-semibold mt-4 mb-3">Idempotent, resume-safe writes</h5>
                <p>
                  All batch inserts use <code className="bg-neutral-100 dark:bg-neutral-800 px-1 rounded">INSERT IGNORE</code>, enabling <strong>safe re-runs</strong> and <strong>mid-batch resumes</strong> without risking duplicate data or manual cleanup. Duplicates are <strong>expected due to resumability and prior partial runs</strong>, and are handled intentionally.
                </p>
                <CodeBlock
                  language="sql"
                  filename="idempotent_insert.sql"
                  code={`INSERT IGNORE INTO expenses_combined_archive (...)
SELECT ...
FROM expenses_2022
WHERE date > :lastDate AND date <= :upperBound
ORDER BY date ASC, transaction_id ASC;`}
                />
                <p className="mt-3">
                  This design guarantees:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                  <li><strong>idempotency</strong></li>
                  <li><strong>safe restarts</strong></li>
                  <li><strong>tolerance of partial failures</strong></li>
                </ul>
                </div>
              </SpacerLine>

              <SpacerLine>
                <div>
                  <h5 className="text-lg font-semibold mt-4 mb-3">Adaptive batch sizing (throughput-driven)</h5>
                <p>
                  Batch sizes <strong>dynamically scale</strong> based on observed rows/sec, allowing the system to <strong>push harder when conditions are good</strong> and <strong>back off under contention</strong>.
                </p>
                <CodeBlock
                  language="typescript"
                  filename="adaptive_batch.ts"
                  code={`if (avgRowsPerSecond < 1000) {
  batchSize = Math.max(batchSize * 0.7, MIN_BATCH_SIZE);
} else if (avgRowsPerSecond > 3000) {
  batchSize = Math.min(batchSize * 1.5, MAX_BATCH_SIZE);
}`}
                />
                <p className="mt-3">
                  This avoids <strong>hard-coded batch assumptions</strong> and keeps <strong>CPU utilization high</strong> without overwhelming the database.
                </p>
                </div>
              </SpacerLine>

              <SpacerLine>
                <div>
                  <h5 className="text-lg font-semibold mt-4 mb-3">Lock-aware execution with bounded retries</h5>
                <p>
                  All reads and writes are wrapped with <strong>explicit lock timeouts</strong> and <strong>retry logic</strong>. Deadlocks and lock waits are treated as <strong>expected behavior at scale, not fatal errors</strong>.
                </p>
                <p>
                  Retries are <strong>bounded to prevent runaway contention</strong>.
                </p>
                <CodeBlock
                  language="typescript"
                  filename="lock_aware.ts"
                  code={`async function executeWithRetry<T>(operation: () => Promise<T>): Promise<T> {
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      return await db.transaction(async (tx) => {
        await tx.query('SET innodb_lock_wait_timeout = 5');
        return await operation();
      });
    } catch (error) {
      if (isLockError(error) && attempt < 2) {
        await sleep(100 * (attempt + 1));
        continue;
      }
      throw error;
    }
  }
  throw new Error('Max retries exceeded');
}`}
                />
                </div>
              </SpacerLine>

              <SpacerLine>
                <div>
                  <h5 className="text-lg font-semibold mt-4 mb-3">Automated kill switch with early warning</h5>
                <p>
                  The migration <strong>continuously monitors</strong>:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                  <li>process CPU and memory</li>
                  <li>system memory</li>
                  <li>database connection pool usage</li>
                  <li>disk growth relative to a detected baseline</li>
                  <li><code className="bg-neutral-100 dark:bg-neutral-800 px-1 rounded">CloudSQL</code> CPU and memory</li>
                  <li>error rates and query timeouts</li>
                </ul>
                <p className="mt-3">
                  <strong>Slack warnings are sent before thresholds are reached</strong>. If a hard limit is exceeded, the system performs a safe shutdown:
                </p>
                <CodeBlock
                  language="typescript"
                  filename="kill_switch.ts"
                  code={`if (cpu > MAX_CPU || memoryMB > MAX_MEMORY || errorRate > MAX_ERROR_RATE) {
  saveResumeState();
  flushFileOperations();
  process.exit(130); // safe, resumable shutdown
}`}
                />
                <p className="mt-3">
                  Resume state is written <strong>atomically to avoid corruption</strong>:
                </p>
                <CodeBlock
                  language="typescript"
                  filename="resume_state.ts"
                  code={`fs.writeFileSync(tempFile, JSON.stringify(state));
fs.renameSync(tempFile, resumeStateFile);`}
                />
                <p className="mt-3">
                  This ensures the migration can <strong>resume exactly where it left off</strong> with <strong>no data loss</strong>.
                </p>
                </div>
              </SpacerLine>

              <SpacerLine>
                <div>
                  <h5 className="text-lg font-semibold mt-4 mb-3">Post-load index creation (separate phase)</h5>
                <p>
                  Indexes are created <strong>after data loading, sequentially</strong>, with:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                  <li><strong>preflight existence checks</strong></li>
                  <li><strong>session-level timeout tuning</strong></li>
                  <li><strong>retries</strong></li>
                  <li><strong>cooldown pauses between indexes</strong></li>
                </ul>
                <CodeBlock
                  language="sql"
                  filename="index_creation.sql"
                  code={`CREATE INDEX idx_expenses_user_date ON expenses_archive(user_id, date);
SELECT SLEEP(60);`}
                />
                </div>
              </SpacerLine>
            </div>
            </div>
          </SpacerLine>
        </div>
      ),
    },
    {
      title: 'Stripe Legacy Plan Migration',
      skills: ['TypeScript', 'Stripe API', 'Terraform', 'Kubernetes', 'Database Engineering'],
      content: (
        <div className="space-y-4">
          <div>
            <p className="text-neutral-600 dark:text-neutral-400 mb-4">
              Production-safe subscription migration with validation, reconciliation, and observability
            </p>
          </div>

          <SpacerLine>
            <div>
              <h4 className="text-xl font-semibold mb-3 mt-4">Overview</h4>
              <p>
                I designed and executed a <strong>zero-downtime migration</strong> to move active subscribers from legacy <code className="bg-neutral-100 dark:bg-neutral-800 px-1 rounded">Stripe</code> price IDs to new plans in production. Because billing changes are irreversible and high-risk, the migration was built as a <strong>self-guarding operational system</strong>, not a one-off script.
              </p>
              <p>
                The result was a <strong>controlled rollout</strong> that preserved billing continuity, respected coupon contracts, and produced <strong>auditable reconciliation artifacts</strong> before and after execution.
              </p>
            </div>
          </SpacerLine>

          <SpacerLine>
            <div>
              <h4 className="text-xl font-semibold mb-3 mt-4">Problem</h4>
              <p>
                Legacy <code className="bg-neutral-100 dark:bg-neutral-800 px-1 rounded">Stripe</code> prices were still attached to live subscriptions while new pricing had already shipped across application code and infrastructure. Migrating these subscribers required handling:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                <li><code className="bg-neutral-100 dark:bg-neutral-800 px-1 rounded">Stripe</code> rate limits and transient API failures</li>
                <li>Subscriptions changing state mid-migration</li>
                <li>Contractual coupon constraints</li>
                <li>The risk of operator error in production environments</li>
              </ul>
              <p className="mt-3">
                A naive migration risked <strong>incorrect charges, broken subscriptions, or silent data drift</strong>.
              </p>
            </div>
          </SpacerLine>

          <SpacerLine>
            <div>
              <h4 className="text-xl font-semibold mb-3 mt-4">Solution</h4>
              <p>
                I implemented a migration pipeline with <strong>safety and observability designed in from the start</strong>.
              </p>
            </div>
          </SpacerLine>

          <SpacerLine>
            <div>
              <h5 className="text-lg font-semibold mt-4 mb-3">Preflight safety gates</h5>
              <p>
                The script blocks execution unless all prerequisites are verified: correct environment, deployed infra (<code className="bg-neutral-100 dark:bg-neutral-800 px-1 rounded">Terraform</code> + <code className="bg-neutral-100 dark:bg-neutral-800 px-1 rounded">Kubernetes</code>), valid price mappings, and required database records.
              </p>
            </div>
          </SpacerLine>

          <SpacerLine>
            <div>
              <h5 className="text-lg font-semibold mt-4 mb-3">Rate-limited, retry-safe Stripe updates</h5>
              <p>
                All <code className="bg-neutral-100 dark:bg-neutral-800 px-1 rounded">Stripe</code> writes are <strong>serialized, throttled well below account limits</strong>, wrapped in timeouts, and retried with exponential backoff.
              </p>
              <CodeBlock
                language="typescript"
                filename="rate_limiting.ts"
                code={`const stripeUpdateQueue = new PQueue({
  concurrency: 1,
  intervalCap: 1,
  interval: 80
});`}
              />
            </div>
          </SpacerLine>

          <SpacerLine>
            <div>
              <h5 className="text-lg font-semibold mt-4 mb-3">Billing-safe updates</h5>
              <p>
                Subscriptions are migrated using item-level updates with <code className="bg-neutral-100 dark:bg-neutral-800 px-1 rounded">proration_behavior: 'none'</code>, ensuring <strong>no surprise charges</strong> and <strong>safe re-runs</strong>.
              </p>
            </div>
          </SpacerLine>

          <SpacerLine>
            <div>
              <h5 className="text-lg font-semibold mt-4 mb-3">Explicit coupon policy handling</h5>
              <p>
                Coupons are treated as <strong>first-class constraints</strong>:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                <li>A specific referral coupon is <strong>allowed and migrated</strong></li>
                <li>All other coupons are <strong>intentionally skipped, logged, and tracked</strong></li>
              </ul>
            </div>
          </SpacerLine>

          <SpacerLine>
            <div>
              <h5 className="text-lg font-semibold mt-4 mb-3">Deterministic reconciliation</h5>
              <p>
                Before and after the migration, the script produces:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                <li><code className="bg-neutral-100 dark:bg-neutral-800 px-1 rounded">Stripe</code> subscription counts by status</li>
                <li>Database subscription counts by status</li>
                <li>An <strong>intersection view</strong> to surface mismatches between systems</li>
              </ul>
            </div>
          </SpacerLine>

          <SpacerLine>
            <div>
              <h5 className="text-lg font-semibold mt-4 mb-3">Operational traceability</h5>
              <p>
                Each run emits <strong>per-plan logs, a master summary, structured failure breakdowns</strong>, and analytics events for post-migration monitoring.
              </p>
            </div>
          </SpacerLine>

          <SpacerLine>
            <div>
              <h4 className="text-xl font-semibold mb-3 mt-4">Outcome</h4>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Migrated legacy subscriptions with <strong>zero downtime or billing regressions</strong></li>
                <li>Prevented production execution unless <strong>infra and configuration were correct</strong></li>
                <li>Generated <strong>auditable reconciliation artifacts</strong> and follow-up workflows</li>
                <li>Established a <strong>repeatable pattern</strong> for future <code className="bg-neutral-100 dark:bg-neutral-800 px-1 rounded">Stripe</code> plan migrations</li>
              </ul>
            </div>
          </SpacerLine>

          <SpacerLine>
            <div>
              <h4 className="text-xl font-semibold mb-3 mt-4">Why this matters</h4>
              <p>
                Billing migrations fail most often due to <strong>hidden state, operator error, or lack of observability</strong>. This project demonstrates how to treat high-risk data changes as <strong>controlled production operations</strong>—with guardrails, proofs, and clear exit paths.
              </p>
            </div>
          </SpacerLine>
        </div>
      ),
    },
    {
      title: 'Revere Expansion of TAM by 300% through Investor Dashboard',
      skills: ['React', 'TypeScript', 'Data Visualization', 'Analytics'],
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
      skills: ['GraphQL', 'Relay', 'TypeScript'],
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
      title: 'Churn & Retention Flow Implementation',
      skills: ['TypeScript', 'React', 'Stripe', 'Database Engineering'],
      content: (
        <div className="space-y-4">
          <div>
            <p className="text-neutral-600 dark:text-neutral-400 mb-4">
              Implementing a product-designed retention funnel in a billing-critical system
            </p>
          </div>

          <SpacerLine>
            <div>
              <h4 className="text-xl font-semibold mb-3 mt-4">Context</h4>
              <p>
                Product redesigned our churn experience to move beyond a simple cancellation survey and introduce <strong>reason-based retention paths</strong>. Implementing this safely was non-trivial. Churn touches <strong>billing, refunds, lifecycle state, analytics, and user messaging</strong>, and mistakes here are costly.
              </p>
              <p>
                My role was to implement the product-designed flow <strong>end to end</strong>, ensuring correctness across <code className="bg-neutral-100 dark:bg-neutral-800 px-1 rounded">Stripe</code>, backend state, and analytics.
              </p>
            </div>
          </SpacerLine>

          <SpacerLine>
            <div>
              <h4 className="text-xl font-semibold mb-3 mt-4">What I implemented</h4>
              <p>
                I implemented a <strong>reason-driven churn funnel</strong> backed by centralized cancellation logic.
              </p>
              <p>
                My scope included:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                <li>Translating product designs into a <strong>deterministic frontend flow</strong></li>
                <li>Enforcing <strong>eligibility rules</strong> to prevent invalid retention offers</li>
                <li><strong>Centralizing cancellation behavior</strong> to avoid <code className="bg-neutral-100 dark:bg-neutral-800 px-1 rounded">Stripe</code> and database drift</li>
                <li>Ensuring <strong>analytics and lifecycle state remained consistent</strong></li>
              </ul>
              <div className="mt-6">
                {/* Combined image for medium screens and wider */}
                <div className="hidden md:block">
                  <Image
                    src="/churn_flow.png"
                    alt="Keeper churn flow showing three screens: cancellation survey, switch to standard tax filing offer, and payment pause offer"
                    width={1920}
                    height={1440}
                    className="rounded-lg border border-neutral-200 dark:border-neutral-800 w-full h-auto"
                    unoptimized
                  />
                </div>
                
                {/* Carousel for smaller screens */}
                <div className="block md:hidden">
                  <ImageCarousel />
                </div>
              </div>
            </div>
          </SpacerLine>

          <SpacerLine>
            <div>
              <h4 className="text-xl font-semibold mb-3 mt-4">Frontend implementation</h4>
              
              <div className="space-y-4">
                <div>
                  <h5 className="text-lg font-semibold mt-4 mb-3">Cancellation survey</h5>
                  <p>
                    Users enter the flow from <strong>Settings → Manage Subscription</strong>.
                  </p>
                  <p>
                    The survey collects a cancellation reason defined by product. Each reason <strong>deterministically routes</strong> to either a retention screen or direct cancellation.
                  </p>
                  <p className="mt-3">
                    Key implementation details:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                    <li>Reasons <strong>shuffled to reduce bias</strong></li>
                    <li>Optional free-text feedback</li>
                    <li><strong>Continue button disabled</strong> until a reason is selected</li>
                    <li><strong>No forced loops or dark patterns</strong></li>
                  </ul>
                </div>

                <SpacerLine>
                  <div>
                    <h5 className="text-lg font-semibold mt-4 mb-3">Retention screens</h5>
                    <p>
                      I implemented multiple retention paths, each <strong>guarded by eligibility checks</strong>:
                    </p>
                    <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                      <li>Switch to filing-only for users no longer freelancing</li>
                      <li>Upgrade to Premium for complex tax cases</li>
                      <li>Complimentary Premium for reported product mistakes</li>
                      <li>Payment pause for eligible monthly subscribers</li>
                      <li>Direct remediation for deduction tracking issues</li>
                    </ul>
                    <p className="mt-3">
                      If a user is not eligible, the flow <strong>falls back to direct cancellation</strong>.
                    </p>
                  </div>
                </SpacerLine>
              </div>
            </div>
          </SpacerLine>

          <SpacerLine>
            <div>
              <h4 className="text-xl font-semibold mb-3 mt-4">State and analytics</h4>
              <p>
                I implemented <strong>centralized state</strong> to track:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                <li>Selected churn reason and feedback</li>
                <li>Submission and loading state</li>
                <li>Retention versus cancellation outcomes</li>
              </ul>
              <p className="mt-3">
                Analytics are emitted at each step, enabling <strong>clean churn and retention funnels</strong> without backend inference.
              </p>
            </div>
          </SpacerLine>

          <SpacerLine>
            <div>
              <h4 className="text-xl font-semibold mb-3 mt-4">Backend: cancellation as infrastructure</h4>
              <p>
                All cancellation paths funnel into a <strong>single method</strong>:
              </p>
              <CodeBlock
                language="typescript"
                filename="payment_service.ts"
                code={`PaymentService.cancelStripeSubscription()`}
              />
              <p className="mt-3">
                This method handles:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                <li><strong>Immediate cancellation</strong> for unpaid or delinquent subscriptions</li>
                <li><strong>Cancel-at-period-end behavior</strong> for active subscriptions</li>
                <li><code className="bg-neutral-100 dark:bg-neutral-800 px-1 rounded">Stripe</code> API interactions</li>
                <li>Database and lifecycle updates</li>
              </ul>
              <p className="mt-3">
                Centralizing this logic ensures new churn experiments do not <strong>compromise billing correctness</strong>.
              </p>
            </div>
          </SpacerLine>

          <SpacerLine>
            <div>
              <h4 className="text-xl font-semibold mb-3 mt-4">Stripe and lifecycle consistency</h4>
              <p>
                <code className="bg-neutral-100 dark:bg-neutral-800 px-1 rounded">Stripe</code> webhooks update subscription state and trigger cancellation emails only when cancellation is newly set.
              </p>
              <p className="mt-3">
                When churn occurs:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                <li>Subscription status updates in the database</li>
                <li>User lifecycle flags and analytics identity are updated</li>
                <li>Messaging tags remain <strong>consistent across systems</strong></li>
              </ul>
            </div>
          </SpacerLine>

          <SpacerLine>
            <div>
              <h4 className="text-xl font-semibold mb-3 mt-4">Why this matters</h4>
              <p>
                This project reflects how I operate as a <strong>senior product engineer</strong>:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                <li>I execute product designs faithfully while <strong>hardening system boundaries</strong></li>
                <li>I treat <strong>billing and churn as infrastructure, not UI</strong></li>
                <li>I <strong>centralize high-risk logic</strong> to prevent long-term maintenance debt</li>
              </ul>
              <p className="mt-3">
                The result is a churn system that <strong>supports retention without sacrificing correctness or user trust</strong>.
              </p>
            </div>
          </SpacerLine>
        </div>
      ),
    },
  ]

  return (
    <section>
      <SectionContainer>
        <h1 className="mb-8 text-2xl font-semibold tracking-tighter">Technical Deep Dives</h1>
        <div className="space-y-0">
          {projects.map((project, index) => (
            <div key={index} className={index > 0 ? 'border-t border-black dark:border-white py-6 my-4' : 'py-6'}>
              <ProjectSection
                title={project.title}
                skills={project.skills}
                isOpen={openSections.has(index)}
                onToggle={() => toggleSection(index)}
              >
                {project.content}
              </ProjectSection>
            </div>
          ))}
        </div>
      </SectionContainer>
    </section>
  )
}
