/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};

<<<<<<< HEAD
module.exports = {
  darkMode: 'class',
=======
// tailwind.config.js
module.exports = {
  darkMode: 'class',
  // ...
>>>>>>> b78738fd89bee61e7942c624e989c40d91fa1a5c
}