/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#05070d',
          900: '#0b0f19',
          850: '#0f1629',
          800: '#141d36',
          700: '#1e293b',
          600: '#334155',
        },
        electric: {
          cyan: '#00f2fe',
          blue: '#4facfe',
          indigo: '#6366f1',
          emerald: '#10b981',
          neon: '#00ff87',
          violet: '#a855f7'
        }
      },
      fontFamily: {
        sans: ['Inter', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
        display: ['"Space Grotesk"', 'Inter', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow-line': 'glowLine 3s ease-in-out infinite',
        'gradient-x': 'gradientX 8s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'scanline': 'scanline 8s linear infinite',
      },
      keyframes: {
        glowLine: {
          '0%, 100%': { opacity: '0.4', transform: 'scaleX(0.95)' },
          '50%': { opacity: '1', transform: 'scaleX(1.05)' },
        },
        gradientX: {
          '0%, 100%': { 'background-size': '200% 200%', 'background-position': 'left center' },
          '50%': { 'background-size': '200% 200%', 'background-position': 'right center' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' }
        }
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(var(--tw-gradient-stops))',
        'cyber-grid': 'linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
        'dots-pattern': 'radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px)',
      }
    },
  },
  plugins: [],
}
