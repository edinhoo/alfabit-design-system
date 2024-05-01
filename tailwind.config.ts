import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      colors: {
        primary: 'rgba(var(--primary), <alpha-value>)',
        secondary: 'rgba(var(--secondary), <alpha-value>)',
        tertiary: 'rgba(var(--tertiary), <alpha-value>)',
        quaternary: 'rgba(var(--quaternary), <alpha-value>)',
        hover: 'rgba(var(--hover), <alpha-value>)',
        click: 'rgba(var(--click), <alpha-value>)',
        icon: 'rgba(var(--icon), <alpha-value>)',
        outline: 'rgba(var(--outline), <alpha-value>)',
        divider: 'rgba(var(--divider), <alpha-value>)',
        disabled: 'rgba(var(--disabled), <alpha-value>)',
      },
      },
    },
  },
  plugins: [],
};
export default config;
