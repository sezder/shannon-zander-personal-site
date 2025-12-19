export default function Work() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Experience
      </h1>
      
      <div className="mb-8">
        <div className="mb-2">
          <h2 className="text-xl font-semibold">KeeperTax</h2>
          <p className="text-neutral-600 dark:text-neutral-400">
            Software Engineer II — Subscriptions & Billing Domain Owner
          </p>
          <p className="text-sm text-neutral-500 dark:text-neutral-500">
            May 2024 - Current
          </p>
        </div>
        <ul className="mt-4 space-y-2 text-neutral-700 dark:text-neutral-300">
          <li className="flex items-start">
            <span className="mr-2">●</span>
            <span>Owned the Subscriptions & Billing domain, serving as the primary engineer responsible for correctness, migrations, and production reliability across a platform supporting 1.39M+ users.</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">●</span>
            <span>Led a multi-phase Stripe subscription consolidation, merging 17 legacy monthly plans into a single canonical plan, affecting 50,335 monthly subscribers and $2.1M+ ARR, representing a material portion of company revenue, with a planned expansion to annual, premium, and business plans.</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">●</span>
            <span>Designed and executed a production-safe migration of ~700M rows across historical transaction data with zero data loss and no customer-facing incidents, operating safely alongside live production traffic.</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">●</span>
            <span>Evaluated partitioning strategies through performance testing and intentionally deferred partitioning, consolidating 2022 and 2023 historical tables into a single archive table with a clear path to expand coverage from 2018–2023.</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">●</span>
            <span>Optimized migration performance by deferring index creation until after data movement, avoiding lock contention and capacity exhaustion during high-throughput writes.</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">●</span>
            <span>Led cross-database schema evolution across transactions, jobs, allocations, and expenses, resolving long-standing data model limitations while maintaining backward compatibility.</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">●</span>
            <span>Simplified subscription and referral data models by removing derived and redundant tables, reducing operational complexity and sources of inconsistency.</span>
          </li>
        </ul>
      </div>

      <div className="mb-8">
        <div className="mb-2">
          <h2 className="text-xl font-semibold">Revere CRE</h2>
          <p className="text-neutral-600 dark:text-neutral-400">
            Software Engineer
          </p>
          <p className="text-sm text-neutral-500 dark:text-neutral-500">
            Jan 2023 - April 2024
          </p>
        </div>
        <ul className="mt-4 space-y-2 text-neutral-700 dark:text-neutral-300">
          <li className="flex items-start">
            <span className="mr-2">●</span>
            <span>Built a custom Relay connection handler to support filtered connections at scale, reducing refetches on a dataset with 88M records, addressing a long-standing Relay limitation first identified in 2017.</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">●</span>
            <span>Designed scalability strategies (BigQuery caching, GCP task queues, eventually-consistent Dagster pipelines) to support a 52k+ user platform processing $26B+ in transactions.</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">●</span>
            <span>Led end-to-end launch of a new product vertical as lead engineer and product owner, expanding total addressable market by 300% and coordinating execution across engineering, product, and design.</span>
          </li>
        </ul>
        <div className="mt-4">
          <p className="text-neutral-600 dark:text-neutral-400">
            Junior Software Engineer
          </p>
          <p className="text-sm text-neutral-500 dark:text-neutral-500">
            May 2022 - Dec 2022
          </p>
          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
            Promoted to mid-level engineer within 8 months.
          </p>
        </div>
      </div>
    </section>
  )
}

