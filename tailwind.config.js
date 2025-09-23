// @type {import('tailwindcss').Config}
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Color (Cyan from your screenshot)
        primary: {
          DEFAULT: '#06b6d4', // cyan-500
          dark: '#0891b2',     // cyan-600
          light: '#67e8f9',    // cyan-300
        },
        // Secondary Color (Blue)
        secondary: {
          DEFAULT: '#2563eb', // blue-600
          dark: '#1d4ed8',    // blue-700
          light: '#3b82f6',   // blue-500
        },
        // Accent Color (Purple)
        accent: {
          DEFAULT: '#7c3aed', // violet-600
          dark: '#5b21b6',    // violet-700
          light: '#8b5cf6',   // violet-500
        },
        // Dark Background
        dark: {
          DEFAULT: '#0f172a', // slate-900
          light: '#1e293b',   // slate-800
          lighter: '#334155', // slate-700
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-in': 'slideIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}