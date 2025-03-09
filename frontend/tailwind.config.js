// tailwind.config.js
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      "./public/index.html"
    ],
    theme: {
      extend: {
        colors: {
          green: {
            50: '#f0fdf4',
            100: '#dcfce7',
            200: '#bbf7d0',
            300: '#86efac',
            400: '#4ade80',
            500: '#22c55e',
            600: '#16a34a',
            700: '#15803d',
            800: '#166534',
            900: '#14532d',
          },
          emerald: {
            50: '#ecfdf5',
            100: '#d1fae5',
            200: '#a7f3d0',
            300: '#6ee7b7',
            400: '#34d399',
            500: '#10b981',
            600: '#059669',
            700: '#047857',
            800: '#065f46',
            900: '#064e3b',
          }
        },
        animation: {
          float: 'float 6s ease-in-out infinite',
          'float-delayed': 'float 6s ease-in-out -3s infinite',
          'gradient-text': 'gradient 5s ease infinite',
        },
        keyframes: {
          float: {
            '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
            '50%': { transform: 'translateY(-20px) rotate(2deg)' },
          },
          gradient: {
            '0%, 100%': { 'background-position': '0% 50%' },
            '50%': { 'background-position': '100% 50%' },
          }
        },
        transitionProperty: {
          'filter': 'filter',
          'height': 'height',
          'width': 'width'
        },
        backgroundImage: {
          'hero-pattern': "url('https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3')",
          'gradient-green-emerald': 'linear-gradient(to right, #14532d, #064e3b)'
        }
      }
    },
    plugins: [],
  }