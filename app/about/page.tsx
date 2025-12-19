export default function About() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        About
      </h1>
      <p className="mb-4">
        Before engineering, I studied <strong>Philosophy and Classics</strong>, which strongly shapes how I approach system design, tradeoffs, and correctness. I've also lived and worked abroad, including serving as an <strong>English Educator and Teacher Trainer</strong> in South Africa.
      </p>
      <p className="mb-4">
        I'm especially interested in work that sits at the intersection of:
      </p>
      <ul className="mb-8 list-disc pl-6 space-y-2">
        <li>correctness</li>
        <li>scale</li>
        <li>and business-critical systems</li>
      </ul>
      
      <div className="my-8">
        <h2 className="mb-4 text-xl font-semibold tracking-tight">Education</h2>
        <div className="mb-4">
          <h3 className="font-semibold">Web Development | App Academy</h3>
          <p className="text-sm text-neutral-500 dark:text-neutral-500">
            June 2021 - May 2022
          </p>
        </div>
        <div>
          <h3 className="font-semibold">BA Philosophy and Classics | Whitman College</h3>
          <p className="text-sm text-neutral-500 dark:text-neutral-500 mb-2">
            2015 - 2019 | GPA 3.6
          </p>
          <ul className="text-sm text-neutral-600 dark:text-neutral-400 space-y-1">
            <li>• Dual Honors in Philosophy and Classics (one of 5 graduates)</li>
            <li>• Associated Students of Whitman College Outstanding Leadership Award</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

