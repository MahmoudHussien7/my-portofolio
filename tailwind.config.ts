import type { Config } from "tailwindcss";
/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class", // Enable class-based dark mode
  purge: false, // Temporarily disable PurgeCSS

  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}", // Ensure this is added
  ],

  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        "spin-slow": "spin 10s linear infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
