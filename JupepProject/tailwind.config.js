/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1024px',
    },
    extend: {
      animation: ['motion-safe'],
      // backgroundColor: ['checked'],
      // borderColor: ['checked'],
      // boxShadow: {
      //   // '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      // }
    },
  },
  plugins: [],
}

