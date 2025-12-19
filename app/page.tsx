export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Shannon Zander
      </h1>
      <p className="mb-4">
        I'm a software engineer focused on <strong>billing systems, data migrations, and production safety at scale</strong>.
      </p>
      <p className="mb-4">
        Currently, I work on <strong>subscriptions and payments infrastructure</strong>, where I own revenue-critical systems, large historical data migrations, and cross-database schema evolution under live production traffic.
      </p>
      <div className="my-8">
        <h2 className="mb-4 text-xl font-semibold tracking-tight">Skills</h2>
        <p className="mb-2 text-neutral-600 dark:text-neutral-400">
          <strong>Languages:</strong> TypeScript, SQL, React, GraphQL (Relay)
        </p>
        <p className="mb-2 text-neutral-600 dark:text-neutral-400">
          <strong>Systems:</strong> GCP, Terraform, Cloud SQL, BigQuery
        </p>
        <p className="mb-2 text-neutral-600 dark:text-neutral-400">
          <strong>Domains:</strong> Stripe Billing, Data Migrations
        </p>
      </div>
    </section>
  )
}
