/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,njk,md}"],
  theme: {
   
    extend: {
       container:{
        center: true,
        },

         screens:{
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
