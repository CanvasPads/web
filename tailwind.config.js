/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        "paper-white": "#F8F6F5",
        "pencil-black": "#2B3936",
        "theme-sky": "#BAE0F5",
        "theme-sky-dark": "#ced9de",
        "theme-sky-shadow": "#e4eaed",
        "theme-strawberry": "#FFE9F1",
      }
    },
  },
  plugins: [],
}

