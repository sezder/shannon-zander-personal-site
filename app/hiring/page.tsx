'use client'

import { SectionContainer } from '../components/section-container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket, faGlobe, faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { text } from '../types/typography'

export default function WorkingWithMe() {
  return (
    <section>
      <SectionContainer>
        <h1 className={`mb-6 ${text({ role: 'pageTitleSmall' })}`}>
          Looking for a backend-heavy product engineer?
        </h1>
        <div className={`mb-16 space-y-4 ${text({ role: 'body', tone: 'muted' })}`}>
            <p>
              I build <strong className={text({ role: 'bodyStrong', tone: 'default' })}>backend-first product systems</strong> for early-stage startups, focusing on <strong className={text({ role: 'bodyStrong', tone: 'default' })}>revenue-critical workflows</strong> where <strong className={text({ role: 'bodyStrong', tone: 'default' })}>correctness and reliability</strong> matter as much as speed.
            </p>
            <p>
              I do my best work owning <strong className={text({ role: 'bodyStrong', tone: 'default' })}>meaningful problems end to end</strong>, from <strong className={text({ role: 'bodyStrong', tone: 'default' })}>data models and APIs</strong> through <strong className={text({ role: 'bodyStrong', tone: 'default' })}>frontend integration</strong>. I think carefully about <strong className={text({ role: 'bodyStrong', tone: 'default' })}>failure modes, migrations, and production rollouts</strong> as systems evolve.
            </p>
        </div>

          <div className="mb-16 pt-8 border-t border-neutral-200 dark:border-neutral-800">
            <h3 className={`mb-3 ${text({ role: 'subsectionTitle', tone: 'default' })}`}>
              Non-negotiables
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="bg-white dark:bg-neutral-900 rounded-lg p-4 border border-neutral-200 dark:border-neutral-800 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <FontAwesomeIcon icon={faRocket} className="w-3 h-3 text-neutral-500 dark:text-neutral-400 flex-shrink-0" />
                  <h4 className={text({ role: 'cardTitle', tone: 'default' })}>
                    Early-stage startups
                  </h4>
                </div>
                <p className={`${text({ role: 'cardDescription', tone: 'default' })} mb-1.5`}>
                  Pre-Series A preferred. This is where impact and ownership are highest.
                </p>
                <p className={text({ role: 'meta', tone: 'subtle', leading: 'snug' })}>
                  I work best in resource-constrained teams where engineering decisions directly shape product direction and business outcomes. Series B is considered case by case.
                </p>
              </div>
              <div className="bg-white dark:bg-neutral-900 rounded-lg p-4 border border-neutral-200 dark:border-neutral-800 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <FontAwesomeIcon icon={faGlobe} className="w-3 h-3 text-neutral-500 dark:text-neutral-400 flex-shrink-0" />
                  <h4 className={text({ role: 'cardTitle', tone: 'default' })}>
                    Remote only
                  </h4>
                </div>
                <p className={`${text({ role: 'cardDescription', tone: 'default' })} mb-1.5`}>
                  Fully remote. This is non-negotiable.
                </p>
                <p className={text({ role: 'meta', tone: 'subtle', leading: 'snug' })}>
                  I do my best work on distributed teams that value focus, clear ownership, and asynchronous communication. Deep work is treated as a competitive advantage.
                </p>
              </div>
              <div className="bg-white dark:bg-neutral-900 rounded-lg p-4 border border-neutral-200 dark:border-neutral-800 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <FontAwesomeIcon icon={faBriefcase} className="w-3 h-3 text-neutral-500 dark:text-neutral-400 flex-shrink-0" />
                  <h4 className={text({ role: 'cardTitle', tone: 'default' })}>
                    Full-time with equity
                  </h4>
                </div>
                <p className={`${text({ role: 'cardDescription', tone: 'default' })} mb-1.5`}>
                  Long-term ownership and alignment.
                </p>
                <p className={text({ role: 'meta', tone: 'subtle', leading: 'snug' })}>
                  I only consider full-time roles with meaningful equity and long-term alignment. I am invested in building the business, not just delivering features.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mb-16 pt-8 border-t border-neutral-200 dark:border-neutral-800">
            <h3 className={`mb-5 ${text({ role: 'subsectionTitle', tone: 'default' })}`}>
              Your team may be a good fit for me if
            </h3>
            <div className={`space-y-4 ${text({ role: 'body', tone: 'muted', leading: 'snug' })} max-w-3xl`}>
              <div>
                <h4 className={`${text({ role: 'cardTitle', tone: 'default' })} mb-2`}>Low ego, high ownership</h4>
                <p>
                  Your engineering team values <strong className={text({ role: 'bodyStrong', tone: 'default' })}>ownership over heroics</strong> and <strong className={text({ role: 'bodyStrong', tone: 'default' })}>collaboration over individual brilliance</strong>. Engineers are expected to own <strong className={text({ role: 'bodyStrong', tone: 'default' })}>problems end to end</strong> and communicate clearly on distributed teams.
                </p>
              </div>
              <div>
                <h4 className={`${text({ role: 'cardTitle', tone: 'default' })} mb-2`}>Process-oriented</h4>
                <p>
                  You want a <strong className={text({ role: 'bodyStrong', tone: 'default' })}>thought partner</strong> in designing engineering processes as the team scales, not just someone to execute tickets. You care about how <strong className={text({ role: 'bodyStrong', tone: 'default' })}>systems, data models, and workflows</strong> evolve over time.
                </p>
              </div>
              <div>
                <h4 className={`${text({ role: 'cardTitle', tone: 'default' })} mb-2`}>Speed with discipline</h4>
                <p>
                  You care about moving <strong className={text({ role: 'bodyStrong', tone: 'default' })}>quickly without cutting corners</strong>. <strong className={text({ role: 'bodyStrong', tone: 'default' })}>Correctness</strong> matters as much as <strong className={text({ role: 'bodyStrong', tone: 'default' })}>speed</strong>, particularly in systems involving <strong className={text({ role: 'bodyStrong', tone: 'default' })}>data, money, or user trust</strong>. Engineers are expected to think about <strong className={text({ role: 'bodyStrong', tone: 'default' })}>failure modes, migrations, and safe rollouts</strong>, not just the happy path.
                </p>
              </div>
            </div>
          </div>
      </SectionContainer>
    </section>
  )
}

