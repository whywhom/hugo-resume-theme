/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layouts/**/*.{html,js,ts}",
    "./content/**/*.{md,html}",
    "./themes/**/*.{html,js,ts}",
    "./assets/**/*.{html,js,ts}",
    "./data/**/*.{json,toml,yaml}",
  ],
  darkMode: "class", // or 'media'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#3B82F6', // blue-500
          dark: '#2563EB',    // blue-600
        },
      },
      boxShadow: {
        resume: '0 0 10px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
