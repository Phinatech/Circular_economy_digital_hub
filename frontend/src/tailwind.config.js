// tailwind.config.js
module.exports = {
    theme: {
      extend: {
        animation: {
          float: 'float 6s ease-in-out infinite',
          'float-delayed': 'float 6s ease-in-out -3s infinite',
        },
        keyframes: {
          float: {
            '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
            '50%': { transform: 'translateY(-20px) rotate(2deg)' },
          }
        }
      }
    }
  }