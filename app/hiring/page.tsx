'use client'

import { SectionContainer } from '../components/section-container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket, faGlobe, faBriefcase } from '@fortawesome/free-solid-svg-icons'

export default function WorkingWithMe() {
  return (
    <section>
      <SectionContainer>
        <h1 className="mb-3 text-2xl md:text-3xl font-semibold tracking-tighter">
          Backend-heavy product engineer
        </h1>
        <p className="mb-8 text-sm md:text-base text-neutral-600 dark:text-neutral-400">
          Owning and building revenue-critical systems
        </p>
        
        <p className="mb-16 text-neutral-700 dark:text-neutral-300">
          I build <strong>backend-first product systems</strong> for early-stage startups. I do my best work owning <strong>meaningful problems end-to-end</strong>, balancing <strong>speed with correctness</strong>, and helping teams scale both their systems and their engineering culture.
        </p>

          <div className="mb-16 pt-8 border-t border-neutral-200 dark:border-neutral-800">
            <h3 className="mb-3 text-lg font-semibold text-neutral-800 dark:text-neutral-200">
              Non-negotiables
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="bg-white dark:bg-neutral-900 rounded-lg p-4 border border-neutral-200 dark:border-neutral-800 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 flex items-center justify-center flex-shrink-0">
                    <FontAwesomeIcon icon={faRocket} className="w-3 h-3 text-neutral-500 dark:text-neutral-400" />
                  </div>
                  <h4 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                    Early-stage startups
                  </h4>
                </div>
                <p className="text-xs font-medium text-neutral-900 dark:text-neutral-100 mb-1.5">
                  Pre-Series A preferred. Maximum impact and ownership.
                </p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-snug">
                  I work best in resource-constrained teams where engineering decisions directly shape product direction and business outcomes. Series B considered case-by-case.
                </p>
              </div>
              <div className="bg-white dark:bg-neutral-900 rounded-lg p-4 border border-neutral-200 dark:border-neutral-800 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 flex items-center justify-center flex-shrink-0">
                    <FontAwesomeIcon icon={faGlobe} className="w-3 h-3 text-neutral-500 dark:text-neutral-400" />
                  </div>
                  <h4 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                    Remote only
                  </h4>
                </div>
                <p className="text-xs font-medium text-neutral-900 dark:text-neutral-100 mb-1.5">
                  Fully remote. This is non-negotiable.
                </p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-snug">
                  I do my best work on distributed teams that value focus, clear ownership, and asynchronous communication. Deep work is a competitive advantage.
                </p>
              </div>
              <div className="bg-white dark:bg-neutral-900 rounded-lg p-4 border border-neutral-200 dark:border-neutral-800 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 flex items-center justify-center flex-shrink-0">
                    <FontAwesomeIcon icon={faBriefcase} className="w-3 h-3 text-neutral-500 dark:text-neutral-400" />
                  </div>
                  <h4 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                    Full-time with equity
                  </h4>
                </div>
                <p className="text-xs font-medium text-neutral-900 dark:text-neutral-100 mb-1.5">
                  Long-term ownership and alignment.
                </p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-snug">
                  I only consider full-time roles with meaningful equity and long-term alignment. I'm invested in building the business, not just delivering features.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mb-16 pt-8 border-t border-neutral-200 dark:border-neutral-800">
            <h3 className="mb-6 text-xl font-semibold text-neutral-900 dark:text-neutral-100">
              My approach
            </h3>
            <div className="mb-10">
              <h4 className="text-base font-semibold text-neutral-900 dark:text-neutral-100 mb-3 mt-2">What I build</h4>
              <ul className="space-y-2 text-base text-neutral-700 dark:text-neutral-300 leading-tight">
                <li>• <strong>Backend-first</strong> product systems for <strong>B2B, SaaS, and fintech</strong></li>
                <li>• Features <strong>end-to-end</strong>—data models to frontend across web and mobile</li>
                <li>• Financial workflows where <strong>correctness</strong> = <strong>speed</strong></li>
              </ul>
            </div>
            <div className="pt-10 border-t border-neutral-200 dark:border-neutral-800">
              <h4 className="text-base font-semibold text-neutral-900 dark:text-neutral-100 mb-3 mt-2">How I work</h4>
              <ul className="space-y-2 text-base text-neutral-700 dark:text-neutral-300 leading-tight">
                <li>• <strong>Backend-first</strong>, systems-oriented</li>
                <li>• <strong>High-velocity, low-regret</strong> execution</li>
                <li>• <strong>Production-aware</strong>, <strong>async communication</strong> by default</li>
                <li>• Think about <strong>failure modes, migrations, and rollouts</strong></li>
              </ul>
            </div>
          </div>

          <div className="mb-16 pt-8 border-t border-neutral-200 dark:border-neutral-800">
            <h3 className="mb-5 text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
              Your team may be a good fit for me if:
            </h3>
            <div className="space-y-3 text-sm text-neutral-700 dark:text-neutral-300 leading-snug max-w-3xl">
              <div>
                <h4 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 mb-1">Low ego, high ownership</h4>
                <p>
                  Your engineering team has <strong>low ego, high ownership</strong> culture. You value <strong>EQ over IQ</strong> on fast-moving teams. <strong>Low friction</strong> between colleagues is a real competitive advantage—you prioritize smooth collaboration over individual brilliance.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 mb-1">Process-oriented</h4>
                <p>
                  You want a <strong>thought partner</strong> in designing engineering processes as the team scales, not just someone to execute.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 mb-1">Speed with discipline</h4>
                <p>
                  You care about moving <strong>quickly without cutting corners</strong>. <strong>Correctness</strong> matters as much as <strong>speed</strong>, especially in systems involving <strong>data, money, or user trust</strong>.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-neutral-200 dark:border-neutral-800">
            <p className="text-lg md:text-xl text-neutral-700 dark:text-neutral-300">
              If this resonates, let's talk. Reach out with a brief overview of what you're building and the problems you're looking to solve.
            </p>
          </div>
      </SectionContainer>
    </section>
  )
}

