/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary': 'var(--primary)',
        'background': 'var(--background)',
        'text': 'var(--text)',
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(80% 40% at 50% -20%, var(--primary), var(--background))',
      },
    },
  },
  plugins: [],
}