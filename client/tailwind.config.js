/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    ],
  theme: {
    extend: {},
    borderRadius: {
      'none': '0',
     default: '4px',
      'large': '12px',
    }
  },
  plugins: [],
}

