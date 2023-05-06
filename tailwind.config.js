/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      height: {
        'calc-full-minus-80': 'calc(100vh - 80px)',
      },
    },
    colors: {
      gray: '#F2F2F2',
      black: '#111517',
      'gray-100': '#848484',
      white: '#FFFFFF',
      'black-100': '#2B3844',
      'black-200': '#202C36',
      'blue-600': '#1E88E5',
    },
    fontFamily: {
      sans: ['NunitoSans', 'sans-serif'],
    },
    variants: {},
    plugins: [],
  },
  plugins: [],
};
