import Image from 'next/image'
import { SectionContainer } from './components/section-container'
import { text } from './types/typography'

function CompanyIcon({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 border-[0.5px] border-black dark:border-white p-0.5">
      {children}
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
  impact?: string
}

function RoleItem({ title, date, impact, isLast = false, isSingleRole = false }: Role & { isLast?: boolean; isSingleRole?: boolean }) {
  return (
    <div className={`${isLast && !isSingleRole ? 'pt-1 pb-2' : isSingleRole ? 'py-1' : 'py-1.5'}`}>
      <p className={`flex justify-between items-center ${text({ role: 'roleTitle', tone: 'default' })}`}>
        <span>{title}</span>
        <span className={text({ role: 'meta', tone: 'subtle' })}>{date}</span>
      </p>
      {impact && (
        <p className={`${text({ role: 'impact', tone: 'muted' })} mt-2`}>
          {impact}
        </p>
      )}
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
    <div className={`${isSingleRole ? 'py-2' : 'py-3'}`}>
      <div className="flex items-center gap-3 mb-3">
        <CompanyIcon>{icon}</CompanyIcon>
        <p className={text({ role: 'company', tone: 'default' })}>
          {company}
        </p>
      </div>
      <div>
        {roles.map((role, index) => (
          <RoleItem 
            key={index} 
            title={role.title} 
            date={role.date}
            impact={role.impact}
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
            <p className={text({ role: 'body', tone: 'default' })}>
              {title} at <strong className={text({ role: 'bodyStrong', tone: 'default' })}>{organization}</strong>
            </p>
            <p className={`${text({ role: 'meta', tone: 'subtle' })} mt-0.5`}>
              {date}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default function Page() {
  return (
    <>
      <section>
        <SectionContainer>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 border border-black dark:border-white relative">
              <Image
                src="/Shannon-Zander-062-Print.jpg"
                alt="Shannon Zander"
                width={80}
                height={80}
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center center' }}
                priority
              />
            </div>
            <h1 className={text({ role: 'pageTitle' })}>
              Shannon Zander
            </h1>
          </div>
          <p className={`mb-4 ${text({ role: 'body', tone: 'muted' })}`}>
            I'm a software engineer who builds and evolves <strong className={text({ role: 'bodyStrong', tone: 'default' })}>revenue-critical billing systems</strong>, prioritizing <strong className={text({ role: 'bodyStrong', tone: 'default' })}>correctness and production safety</strong>.
          </p>
          <p className={`mb-4 ${text({ role: 'body', tone: 'muted' })}`}>
            I currently own <strong className={text({ role: 'bodyStrong', tone: 'default' })}>subscriptions and payments infrastructure</strong>, including <strong className={text({ role: 'bodyStrong', tone: 'default' })}>large-scale data migrations</strong> and <strong className={text({ role: 'bodyStrong', tone: 'default' })}>cross-database schema evolution</strong> under <strong className={text({ role: 'bodyStrong', tone: 'default' })}>live traffic</strong>.
          </p>
        </SectionContainer>
      </section>
      
      <section className="mt-8">
        <SectionContainer>
          <div className="flex flex-col gap-8">
              <div className="flex flex-col">
                <h2 className={`${text({ role: 'sectionTitle', tone: 'default' })} mb-6 mt-2`}>
                  Working experience
                </h2>
              <div className="space-y-3 flex-1">
                <CompanyExperience
                  icon={
                    <Image
                      src="/keepertax-logo.png"
                      alt="KeeperTax logo"
                      width={28}
                      height={28}
                      className="object-cover w-full h-full rounded-full scale-110"
                      priority
                      sizes="28px"
                    />
                  }
                  company="KeeperTax"
                  roles={[
                    { 
                      title: 'Software Engineer II', 
                      date: 'May 2024 – Present',
                      impact: 'Owned the subscriptions and billing domain, leading revenue-critical Stripe migrations, large-scale production data backfills, and cross-database schema evolution supporting 1.39M+ users.'
                    }
                  ]}
                />
                <div className="mt-12"></div>
                <CompanyExperience
                  icon={
                    <Image
                      src="/revere-cre-icon.png"
                      alt="Revere CRE icon"
                      width={28}
                      height={28}
                      className="object-cover w-full h-full rounded-full scale-110"
                      priority
                      sizes="28px"
                    />
                  }
                  company="Revere CRE"
                  roles={[
                    { 
                      title: 'Software Engineer', 
                      date: 'Jan 2023 – Apr 2024',
                      impact: 'Built backend-heavy product systems at scale, designing data pipelines and infrastructure to support a 52k+ user platform processing $26B+ in transactions.'
                    },
                    { 
                      title: 'Junior Software Engineer', 
                      date: 'May 2022 – Dec 2022',
                      impact: 'Promoted to mid-level engineer within 8 months based on consistent delivery and technical growth.'
                    }
                  ]}
                />
              </div>
            </div>
            
            <div className="flex flex-col pt-8 border-t border-neutral-200 dark:border-neutral-800">
              <h2 className={`${text({ role: 'sectionTitle', tone: 'default' })} mb-6 mt-2`}>
                Awards & Recognition
              </h2>
              <div className="space-y-2">
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
          </div>
        </SectionContainer>
      <SectionContainer className="mt-8">
        <div className="pt-8 border-t border-neutral-200 dark:border-neutral-800">
          <h2 className={`mb-6 ${text({ role: 'subsectionTitle' })}`}>Skills</h2>
              <div className="space-y-5">
                <div>
                  <p className={`mb-2 ${text({ role: 'caption', tone: 'subtle' })}`}>
                    Backend-first product engineer with deep experience in data-heavy systems and billing infrastructure.
                  </p>
                  <h3 className={`mb-1.5 ${text({ role: 'label', tone: 'muted' })}`}>
                    Primary Languages
                  </h3>
                  <div className="flex flex-col md:flex-row md:flex-wrap gap-0 md:gap-1.5">
                    {['TypeScript', 'SQL', 'React', 'GraphQL (Relay)'].map((skill, index) => (
                      <div key={skill} className="md:contents">
                        <span
                          className={`block md:inline-block px-2 py-0 md:py-1 ${text({ role: 'body', tone: index === 0 ? 'muted' : 'subtle' })}`}
                        >
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className={`mb-1.5 ${text({ role: 'label', tone: 'muted' })}`}>
                    Infrastructure & Data
                  </h3>
                  <div className="flex flex-col md:flex-row md:flex-wrap gap-0 md:gap-1.5">
                    {['GCP', 'Terraform', 'Cloud SQL', 'BigQuery'].map((skill, index) => (
                      <div key={skill} className="md:contents">
                        <span
                          className={`block md:inline-block px-2 py-0 md:py-1 ${text({ role: 'body', tone: index === 0 ? 'muted' : 'subtle' })}`}
                        >
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className={`mb-1.5 ${text({ role: 'label', tone: 'muted' })}`}>
                    Product Domains
                  </h3>
                  <div className="flex flex-col md:flex-row md:flex-wrap gap-0 md:gap-1.5">
                    {['Stripe Billing', 'High-volume Production Data Migrations'].map((skill, index) => (
                      <div key={skill} className="md:contents">
                        <span
                          className={`block md:inline-block px-2 py-0 md:py-1 ${text({ role: 'body', tone: index === 0 ? 'muted' : 'subtle' })}`}
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
      </section>
    </>
  )
}
