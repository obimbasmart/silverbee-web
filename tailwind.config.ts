import type { Config } from "tailwindcss";
import flowbite from "flowbite-react/tailwind";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content()
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#0E84E5",
        secondary: '#F0F7FF',
        notify: '#ff3636',
        dark: {
          700: '#2C3333',
          800: '#20262E'
        },
        hints: '#767A7A',
        gray: {
          hint: '#E9E9EA' 
        }
      },
      fontFamily: {
        montserrat: 'var(--font-montserrat)',
        manrope: 'var(--font-manrope)'
      }
    },
  },
  plugins: [
    flowbite.plugin()
  ],
};
export default config;
