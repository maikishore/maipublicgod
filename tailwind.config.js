module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./Assets/menubackground.svg')",
        
       }
    },
  },
  variants: {
    extend: {backgroundColor: ['active']},
  },
  plugins: [
    
    require("daisyui")]
};
