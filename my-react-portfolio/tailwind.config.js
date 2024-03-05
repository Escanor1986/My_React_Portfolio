/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        bg_app: "url('./src/assets/synthwave_bg_sun.jpg')",
        logo: "url('./src/assets/logo.webp')"
      },
      colors: {
        'text-border-lavande': '#C792EA',
        'text-border-white': '#E0E0E0',
        'bg-main-dark': '#331B4D',
        'bg-sub-clear': '#FF61F6',
        'button-link': '#2196F3',
        'button-link-hover': '#4BDFE5',
        'deep-nav-foot': '#0D0221',
        'rose-bg': '#DC337B',
        'dark-bg': '#29027A'
      }
    }
  },
  plugins: []
};
