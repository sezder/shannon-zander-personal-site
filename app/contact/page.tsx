export default function Contact() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Contact
      </h1>
      <div className="space-y-4">
        <div>
          <h2 className="mb-2 text-lg font-semibold">Email</h2>
          <a
            href="mailto:shannon.e.zander@gmail.com"
            className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200 underline"
          >
            shannon.e.zander@gmail.com
          </a>
        </div>
        <div>
          <h2 className="mb-2 text-lg font-semibold">Links</h2>
          <ul className="space-y-2">
            <li>
              <a
                href="https://github.com/sezder"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200 underline"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/shannon-e-zander/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200 underline"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

