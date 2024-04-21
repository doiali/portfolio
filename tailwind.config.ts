import type { Config } from "tailwindcss";
const customPlugins = require('./src/styles/plugins');


const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
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
