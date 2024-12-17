/** @type {import('tailwindcss').Config} */
module.exports = {
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
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      screens: {
        'xs': '475px',
      },
    },
  },
  plugins: [],
}