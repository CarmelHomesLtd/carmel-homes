/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
import tailwindForms from "@tailwindcss/forms";
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [
    tailwindForms({
      strategy: 'class', // only generate classes
    }),
  ],
}

