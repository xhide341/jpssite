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
        'primary-rgb': 'var(--primary-rgb)',
        'background': 'var(--background)',
        'text': 'var(--text)',
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(80% 40% at 50% -20%, var(--primary), var(--background))',
      },
      fontFamily: {
        'generalSans': ['GeneralSans', 'Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
        'gambetta': ['Gambetta-Regular', 'Gambetta-Medium', 'Gambetta-Light', 'serif']
      },
    },
  },
  plugins: [],
}