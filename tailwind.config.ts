import type { Config } from "tailwindcss";
const customPlugins = require('./src/styles/plugins');


const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
        },
      },
      spacing: {
        '18': '4.5rem',
      }
    },
  },
  plugins: [
    ...customPlugins,
  ],
};
export default config;
