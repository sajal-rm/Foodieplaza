/** @type {import('tailwindcss').Config} */
module.exports = {
  content:  [
    "./src/**/*.{html,js}"
  ],//this is list of files where i can use tailwind ,hence wherever we can find tsx , jsx js files  etc (all inside src folder ) we can use taiwind at there here we are using just js and html , so we can ommit jsx , tsx also 
  theme: {
    extend: {},
  },
  plugins: [],
}

// post css helps to understand tailwind by parcel , so parcel uses postcss to understand tailwind thats why here statement has tailwind written here 
