import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'section-bg': '#F9F9F7',
      },
    },
  },
  plugins: [],
}
export default config

