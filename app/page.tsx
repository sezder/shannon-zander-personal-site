import Image from 'next/image'
import { SectionContainer } from './components/section-container'

function CompanyIcon({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-10 h-10 rounded-lg bg-neutral-200/50 dark:bg-neutral-800/50 flex items-center justify-center flex-shrink-0">
      <div className="w-9 h-9 rounded-lg bg-white dark:bg-neutral-900 flex items-center justify-center p-1">
        {children}
      </div>
    </div>
  )
}

function AwardIcon({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-7 h-7 flex items-center justify-center flex-shrink-0">
      {children}
    </div>
  )
}

type Role = {
  title: string
  date: string
}

function RoleItem({ title, date, isLast = false, isSingleRole = false }: Role & { isLast?: boolean; isSingleRole?: boolean }) {
  return (
    <div className={`pl-14 ${isLast && !isSingleRole ? 'pt-0.5 pb-1.5' : isSingleRole ? 'py-0.5' : 'py-1.5'}`}>
      <p className="text-sm text-neutral-900 dark:text-neutral-100">
        <span className="font-medium">{title}</span>
      </p>
      <p className={`text-xs text-neutral-400 dark:text-neutral-500 ${isSingleRole ? 'mt-0' : 'mt-0.5'}`}>
        {date}
      </p>
    </div>
  )
}

function CompanyExperience({ 
  icon, 
  company, 
  roles
}: { 
  icon: React.ReactNode
  company: string
  roles: Role[]
}) {
  const isSingleRole = roles.length === 1
  return (
    <div className={`bg-white dark:bg-neutral-900 rounded-lg ${isSingleRole ? 'py-2 px-3' : 'p-3'}`}>
      <div className="flex items-center gap-3 mb-1">
        <CompanyIcon>{icon}</CompanyIcon>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-neutral-950 dark:text-neutral-50">
            {company}
          </p>
        </div>
      </div>
      <div>
        {roles.map((role, index) => (
          <RoleItem 
            key={index} 
            title={role.title} 
            date={role.date} 
            isLast={index === roles.length - 1}
            isSingleRole={isSingleRole}
          />
        ))}
      </div>
    </div>
  )
}

function AwardItem({ 
  icon, 
  title, 
  organization, 
  date,
  isLast = false
}: { 
  icon: React.ReactNode
  title: string
  organization: string
  date: string
  isLast?: boolean
}) {
  return (
    <>
      <div className="py-2.5 flex items-center">
        <div className="flex items-center gap-3 w-full">
          <AwardIcon>{icon}</AwardIcon>
          <div className="flex-1 min-w-0">
            <p className="text-sm text-neutral-900 dark:text-neutral-100">
              {title} at <strong className="font-semibold text-neutral-950 dark:text-neutral-50">{organization}</strong>
            </p>
            <p className="text-xs text-neutral-400 dark:text-neutral-500 mt-0.5">
              {date}
            </p>
          </div>
        </div>
      </div>
      {!isLast && <div className="h-px bg-neutral-200 dark:bg-neutral-800" />}
    </>
  )
}

export default function Page() {
  return (
    <>
      <section>
        <SectionContainer>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-full bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center flex-shrink-0">
              <div className="w-[60px] h-[60px] rounded-full bg-neutral-300 dark:bg-neutral-700 flex items-center justify-center">
                <span className="text-neutral-500 dark:text-neutral-400 text-xs">Photo</span>
              </div>
            </div>
            <h1 className="text-2xl md:text-3xl font-semibold tracking-tighter">
              Shannon Zander
            </h1>
          </div>
          <p className="mb-4">
            I'm a software engineer focused on <strong>billing systems, data migrations, and production safety at scale</strong>.
          </p>
          <p className="mb-4">
            Currently, I work on <strong>subscriptions and payments infrastructure</strong>, where I own revenue-critical systems, large historical data migrations, and cross-database schema evolution under live production traffic.
          </p>
        </SectionContainer>
      </section>
      
      <section className="w-screen mt-8">
        <div className="bg-section-bg dark:bg-neutral-950 py-6 md:py-8">
          <SectionContainer className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="flex flex-col h-full">
              <h2 className="text-2xl font-semibold mb-6 mt-2 text-neutral-900 dark:text-neutral-100">
                Working experience
              </h2>
              <div className="space-y-3 flex-1">
                <CompanyExperience
                  icon={
                    <Image
                      src="/keepertax-logo.png"
                      alt="KeeperTax logo"
                      width={32}
                      height={32}
                      className="object-contain w-full h-full"
                      priority
                      sizes="32px"
                    />
                  }
                  company="KeeperTax"
                  roles={[
                    { title: 'Software Engineer II', date: 'May 2024 - Current' }
                  ]}
                />
                <CompanyExperience
                  icon={
                    <Image
                      src="/revere-cre-icon.png"
                      alt="Revere CRE icon"
                      width={32}
                      height={32}
                      className="object-contain w-full h-full"
                      priority
                      sizes="32px"
                    />
                  }
                  company="Revere CRE"
                  roles={[
                    { title: 'Software Engineer', date: 'Jan 2023 - April 2024' },
                    { title: 'Junior Software Engineer', date: 'May 2022 - Dec 2022' }
                  ]}
                />
              </div>
            </div>
            
            <div className="flex flex-col h-full">
              <h2 className="text-2xl font-semibold mb-6 mt-2 text-neutral-900 dark:text-neutral-100">
                Awards & Recognition
              </h2>
              <div className="space-y-2 flex-1 lg:space-y-0 lg:flex lg:flex-col lg:justify-between">
                <AwardItem
                  icon={
                    <Image
                      src="/whitman-college-seal.png"
                      alt="Whitman College seal"
                      width={28}
                      height={28}
                      className="object-contain w-full h-full"
                      priority
                      sizes="28px"
                    />
                  }
                  title="Honors in Major Study (Philosophy & Classics)"
                  organization="Whitman College"
                  date="2019"
                  isLast={false}
                />
                <AwardItem
                  icon={
                    <Image
                      src="/whitman-college-seal.png"
                      alt="Whitman College seal"
                      width={28}
                      height={28}
                      className="object-contain w-full h-full"
                      sizes="28px"
                    />
                  }
                  title="Louis B. Perry Research Grant"
                  organization="Whitman College"
                  date="2018"
                  isLast={false}
                />
                <AwardItem
                  icon={
                    <Image
                      src="/aswc-logo.png"
                      alt="ASWC logo"
                      width={28}
                      height={28}
                      className="object-contain w-full h-full rounded-full"
                      sizes="28px"
                    />
                  }
                  title="Outstanding Leadership Award"
                  organization="Associated Students of Whitman College"
                  date="2016"
                  isLast={true}
                />
              </div>
            </div>
          </SectionContainer>
          <SectionContainer className="mt-8">
            <div>
              <h2 className="mb-6 text-xl font-semibold tracking-tight">Skills</h2>
              <div className="space-y-5">
                <div>
                  <p className="mb-2 text-xs md:text-sm text-neutral-400 dark:text-neutral-500">
                    Backend-first product engineer with deep experience in data-heavy systems and billing infrastructure.
                  </p>
                  <h3 className="mb-1.5 text-xs md:text-sm font-semibold text-neutral-700 dark:text-neutral-300">
                    Primary Languages
                  </h3>
                  <div className="flex flex-col md:flex-row md:flex-wrap gap-0 md:gap-1.5">
                    {['TypeScript', 'SQL', 'React', 'GraphQL (Relay)'].map((skill, index) => (
                      <div key={skill} className="md:contents">
                        <span
                          className={`block md:inline-block px-2 py-0 md:py-1 text-sm ${index === 0 ? 'font-normal text-neutral-700 dark:text-neutral-300' : 'font-normal text-neutral-500 dark:text-neutral-400'}`}
                        >
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="mb-1.5 text-xs md:text-sm font-semibold text-neutral-700 dark:text-neutral-300">
                    Infrastructure & Data
                  </h3>
                  <div className="flex flex-col md:flex-row md:flex-wrap gap-0 md:gap-1.5">
                    {['GCP', 'Terraform', 'Cloud SQL', 'BigQuery'].map((skill, index) => (
                      <div key={skill} className="md:contents">
                        <span
                          className={`block md:inline-block px-2 py-0 md:py-1 text-sm ${index === 0 ? 'font-normal text-neutral-700 dark:text-neutral-300' : 'font-normal text-neutral-500 dark:text-neutral-400'}`}
                        >
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="mb-1.5 text-xs md:text-sm font-semibold text-neutral-700 dark:text-neutral-300">
                    Product Domains
                  </h3>
                  <div className="flex flex-col md:flex-row md:flex-wrap gap-0 md:gap-1.5">
                    {['Stripe Billing', 'High-volume Production Data Migrations'].map((skill, index) => (
                      <div key={skill} className="md:contents">
                        <span
                          className={`block md:inline-block px-2 py-0 md:py-1 text-sm ${index === 0 ? 'font-normal text-neutral-700 dark:text-neutral-300' : 'font-normal text-neutral-500 dark:text-neutral-400'}`}
                        >
                          {skill === 'High-volume Production Data Migrations' ? (
                            <>
                              High-volume Production<br className="md:hidden" /> Data Migrations
                            </>
                          ) : (
                            skill
                          )}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </SectionContainer>
        </div>
      </section>
    </>
  )
}
