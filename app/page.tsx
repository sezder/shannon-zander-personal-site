import Image from 'next/image'

function CompanyIcon({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-12 h-12 rounded-lg bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center flex-shrink-0">
      <div className="w-10 h-10 rounded-lg bg-white dark:bg-neutral-900 flex items-center justify-center p-1">
        {children}
      </div>
    </div>
  )
}

function ExperienceItem({ 
  icon, 
  title, 
  company, 
  date 
}: { 
  icon: React.ReactNode
  title: string
  company: string
  date: string 
}) {
  return (
    <div className="bg-white dark:bg-neutral-900 rounded-lg p-4 border-b border-neutral-200 dark:border-neutral-800">
      <div className="flex items-start gap-3">
        <CompanyIcon>{icon}</CompanyIcon>
        <div className="flex-1 min-w-0">
          <p className="text-sm text-neutral-900 dark:text-neutral-100">
            {title} at <strong>{company}</strong>
          </p>
          <p className="text-xs text-neutral-500 dark:text-neutral-500 mt-1">
            {date}
          </p>
        </div>
      </div>
    </div>
  )
}

function AwardItem({ 
  icon, 
  title, 
  organization, 
  date 
}: { 
  icon: React.ReactNode
  title: string
  organization: string
  date: string 
}) {
  return (
    <div className="bg-white dark:bg-neutral-900 rounded-lg p-4 border-b border-neutral-200 dark:border-neutral-800">
      <div className="flex items-start gap-3">
        <CompanyIcon>{icon}</CompanyIcon>
        <div className="flex-1 min-w-0">
          <p className="text-sm text-neutral-900 dark:text-neutral-100">
            {title} at <strong>{organization}</strong>
          </p>
          <p className="text-xs text-neutral-500 dark:text-neutral-500 mt-1">
            {date}
          </p>
        </div>
      </div>
    </div>
  )
}

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
      
      <div className="my-8 relative left-1/2 -translate-x-1/2 w-screen">
        <div className="bg-[#F9F9F7] dark:bg-neutral-950 rounded-lg py-6 md:py-8">
          <div className=" max-w-xl mx-auto">
          <div className="grid grid-cols-1 gap-8">
            <div>
              <h2 className="text-2xl font-semibold mb-6 text-neutral-900 dark:text-neutral-100">
                Working experience
              </h2>
              <div className="space-y-3">
                <ExperienceItem
                  icon={
                    <Image
                      src="/keepertax-logo.png"
                      alt="KeeperTax logo"
                      width={32}
                      height={32}
                      className="object-contain w-full h-full"
                    />
                  }
                  title="Software Engineer II"
                  company="KeeperTax"
                  date="May 2024 - Current"
                />
                <ExperienceItem
                  icon={
                    <Image
                      src="/revere-cre-icon.png"
                      alt="Revere CRE icon"
                      width={32}
                      height={32}
                      className="object-contain w-full h-full"
                    />
                  }
                  title="Software Engineer"
                  company="Revere CRE"
                  date="Jan 2023 - April 2024"
                />
                <ExperienceItem
                  icon={
                    <Image
                      src="/revere-cre-icon.png"
                      alt="Revere CRE icon"
                      width={32}
                      height={32}
                      className="object-contain w-full h-full"
                    />
                  }
                  title="Junior Software Engineer"
                  company="Revere CRE"
                  date="May 2022 - Dec 2022"
                />
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-6 text-neutral-900 dark:text-neutral-100">
                Awards & Recognition
              </h2>
              <div className="space-y-3">
                <AwardItem
                  icon={
                    <Image
                      src="/whitman-college-seal.png"
                      alt="Whitman College seal"
                      width={32}
                      height={32}
                      className="object-contain w-full h-full"
                    />
                  }
                  title="Outstanding Leadership Award"
                  organization="Whitman College"
                  date="2019"
                />
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>

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
