/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        bangers: ['Bangers', 'Impact', 'cursive'],
        comic: ['Comic Neue', 'Comic Sans MS', 'cursive'],
        marker: ['Permanent Marker', 'cursive'],
      },
      colors: {
        ink: '#1a1008',
        paper: '#fdf6e3',
        paper2: '#fff9f0',
        comic: {
          yellow: '#ffe838',
          red: '#ff2d20',
          blue: '#1a6fff',
          cyan: '#00d4ff',
          green: '#00c853',
          orange: '#ff6b00',
          purple: '#7c3aed',
          pink: '#ff4fa3',
        },
      },
      boxShadow: {
        comic: '6px 6px 0 #1a1008',
        'comic-sm': '3px 3px 0 #1a1008',
        'comic-lg': '10px 10px 0 #1a1008',
        'comic-xl': '14px 14px 0 #1a1008',
      },
      borderWidth: {
        '3': '3px',
        '4': '4px',
        '5': '5px',
        '6': '6px',
      },
    },
  },
  plugins: [],
}
