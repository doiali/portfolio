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
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
      },
    },
  },
  plugins: [
    ...customPlugins,
  ],
};
export default config;
