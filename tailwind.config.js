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
        'foreground': 'var(--text-foreground)',
        'background': 'var(--background)',
        'text': 'var(--text)',
        'custom-white': 'var(--custom-white)',
        'custom-black': 'var(--custom-black)',
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(80% 40% at 50% -20%, var(--primary), var(--background))',
      },
      fontFamily: {
        'general-sans': ['GeneralSans', 'Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
        'gambetta': ['Gambetta-Regular', 'sans-serif']
      },
    },
  },
  plugins: [],
}