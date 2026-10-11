/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        clay: {
          bg: '#EEF0FB',
          surface: '#F6F7FF',
          ink: '#26253F',
          soft: '#5E5C80',
          primary: '#5B50E6',
          accent: '#FF9F7A',
          success: '#2FBF8F',
          warning: '#F5B544',
          danger: '#EF5D7A',
        },
      },
      borderRadius: { clay: '28px', 'clay-md': '18px' },
      fontFamily: { heading: ['Fredoka', 'sans-serif'], body: ['Nunito', 'sans-serif'] },
    },
  },
  plugins: [],
};
