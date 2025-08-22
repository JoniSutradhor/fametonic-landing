import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pinkAccent: "#ff007f",
        blueAccent: "#00cfff",
        darkBg: "#0a0a0a",
      },
      fontFamily: {
        figtree: "var(--font-figtree)",
        urbanist: "var(--font-urbanist)",
      },
    },
  },
  plugins: [],
}
export default config
