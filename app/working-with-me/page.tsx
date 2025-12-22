'use client'

import { SectionContainer } from '../components/section-container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket, faGlobe, faBriefcase, faGears, faUsers, faGauge, faCompassDrafting } from '@fortawesome/free-solid-svg-icons'

export default function WorkingWithMe() {
  return (
    <section>
      <SectionContainer>
        <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
          Backend-heavy product engineer
        </h1>
        
        <p className="mb-12 text-neutral-700 dark:text-neutral-300">
          I build <strong>backend-first product systems</strong> for early-stage startups. I do my best work owning <strong>meaningful problems end-to-end</strong>, balancing <strong>speed with correctness</strong>, and helping teams scale both their systems and their engineering culture.
        </p>

          <div className="mb-8">
            <h3 className="mb-3 text-lg font-semibold text-neutral-800 dark:text-neutral-200">
              Necessary requirements
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="bg-white dark:bg-neutral-900 rounded-lg p-3 border-2 border-neutral-300 dark:border-neutral-700 shadow-md">
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-7 h-7 rounded-full border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex items-center justify-center flex-shrink-0">
                    <FontAwesomeIcon icon={faRocket} className="w-3.5 h-3.5 text-black dark:text-white" />
                  </div>
                  <h4 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                    Early-stage startups
                  </h4>
                </div>
                <p className="text-xs text-neutral-700 dark:text-neutral-300 leading-snug">
                  I'm a <strong>startup engineer</strong> who thrives in fast-moving, resource-constrained environments. I prefer <strong>early stage startups</strong>—pre Series A, where impact and ownership are highest. Series B on a case-by-case basis.
                </p>
              </div>
              <div className="bg-white dark:bg-neutral-900 rounded-lg p-3 border-2 border-neutral-300 dark:border-neutral-700 shadow-md">
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-7 h-7 rounded-full border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex items-center justify-center flex-shrink-0">
                    <FontAwesomeIcon icon={faGlobe} className="w-3.5 h-3.5 text-black dark:text-white" />
                  </div>
                  <h4 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                    Remote only
                  </h4>
                </div>
                <p className="text-xs text-neutral-700 dark:text-neutral-300 leading-snug">
                  I work <strong>remote only</strong>. I value <strong>distributed teams</strong> who understand the value of <strong>deep work</strong> in getting a competitive edge.
                </p>
              </div>
              <div className="bg-white dark:bg-neutral-900 rounded-lg p-3 border-2 border-neutral-300 dark:border-neutral-700 shadow-md">
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-7 h-7 rounded-full border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex items-center justify-center flex-shrink-0">
                    <FontAwesomeIcon icon={faBriefcase} className="w-3.5 h-3.5 text-black dark:text-white" />
                  </div>
                  <h4 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                    Full-time with equity
                  </h4>
                </div>
                <p className="text-xs text-neutral-700 dark:text-neutral-300 leading-snug">
                  I only work <strong>full-time roles with equity</strong>. When I join a startup, I'm <strong>all in</strong>.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mb-10">
            <h3 className="mb-4 text-lg font-semibold text-neutral-800 dark:text-neutral-200">
              My approach
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white dark:bg-neutral-900 rounded-lg p-5 border-2 border-neutral-300 dark:border-neutral-700 shadow-md">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-full border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex items-center justify-center flex-shrink-0">
                    <FontAwesomeIcon icon={faCompassDrafting} className="w-4 h-4 text-black dark:text-white" />
                  </div>
                  <h4 className="text-base font-semibold text-neutral-900 dark:text-neutral-100">What I build</h4>
                </div>
                <ul className="space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
                  <li>• <strong>Backend-first</strong> product systems for <strong>B2B, SaaS, and fintech</strong></li>
                  <li>• Features <strong>end-to-end</strong>—data models to frontend across web and mobile</li>
                  <li>• Financial workflows where <strong>correctness</strong> = <strong>speed</strong></li>
                </ul>
              </div>
              <div className="bg-white dark:bg-neutral-900 rounded-lg p-5 border-2 border-neutral-300 dark:border-neutral-700 shadow-md">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-full border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex items-center justify-center flex-shrink-0">
                    <FontAwesomeIcon icon={faGears} className="w-4 h-4 text-black dark:text-white" />
                  </div>
                  <h4 className="text-base font-semibold text-neutral-900 dark:text-neutral-100">How I work</h4>
                </div>
                <ul className="space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
                  <li>• <strong>Backend-first</strong>, systems-oriented</li>
                  <li>• <strong>High-velocity, low-regret</strong> execution</li>
                  <li>• <strong>Production-aware</strong>, <strong>async communication</strong> by default</li>
                  <li>• Think about <strong>failure modes, migrations, and rollouts</strong></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-10">
            <h3 className="mb-4 text-lg font-semibold text-neutral-800 dark:text-neutral-200">
              Your team may be a good fit for me if:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="bg-white dark:bg-neutral-900 rounded-lg p-3 border-2 border-neutral-300 dark:border-neutral-700 shadow-md">
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-7 h-7 rounded-full border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex items-center justify-center flex-shrink-0">
                    <FontAwesomeIcon icon={faUsers} className="w-3.5 h-3.5 text-black dark:text-white" />
                  </div>
                  <h4 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                    Low ego, high ownership
                  </h4>
                </div>
                <p className="text-xs text-neutral-700 dark:text-neutral-300 leading-snug">
                  Your engineering team has <strong>low ego, high ownership</strong> culture. You value <strong>EQ over IQ</strong> on fast-moving teams. <strong>Low friction</strong> between colleagues is a real competitive advantage—you prioritize smooth collaboration over individual brilliance.
                </p>
              </div>
              <div className="bg-white dark:bg-neutral-900 rounded-lg p-3 border-2 border-neutral-300 dark:border-neutral-700 shadow-md">
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-7 h-7 rounded-full border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex items-center justify-center flex-shrink-0">
                    <FontAwesomeIcon icon={faGears} className="w-3.5 h-3.5 text-black dark:text-white" />
                  </div>
                  <h4 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                    Process-oriented
                  </h4>
                </div>
                <p className="text-xs text-neutral-700 dark:text-neutral-300 leading-snug">
                  You want a <strong>thought partner</strong> in designing engineering processes as the team scales, not just someone to execute.
                </p>
              </div>
              <div className="bg-white dark:bg-neutral-900 rounded-lg p-3 border-2 border-neutral-300 dark:border-neutral-700 shadow-md">
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-7 h-7 rounded-full border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex items-center justify-center flex-shrink-0">
                    <FontAwesomeIcon icon={faGauge} className="w-3.5 h-3.5 text-black dark:text-white" />
                  </div>
                  <h4 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                    Speed with discipline
                  </h4>
                </div>
                <p className="text-xs text-neutral-700 dark:text-neutral-300 leading-snug">
                  You care about moving <strong>quickly without cutting corners</strong>. <strong>Correctness</strong> matters as much as <strong>speed</strong>, especially in systems involving <strong>data, money, or user trust</strong>.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-neutral-200 dark:border-neutral-800">
            <p className="text-neutral-700 dark:text-neutral-300">
              If this resonates, let's talk. Reach out with a brief overview of what you're building and the problems you're looking to solve.
            </p>
          </div>
      </SectionContainer>
    </section>
  )
}
