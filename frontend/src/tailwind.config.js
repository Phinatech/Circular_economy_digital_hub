// tailwind.config.js
module.exports = {
    theme: {
        extend: {
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
            }
        }
    }
}