/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./App.tsx",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./constants/**/*.{js,ts,jsx,tsx}",
    "./utils/**/*.{js,ts,jsx,tsx}",
    "./data/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Cambrian Climate Club Editorial Palette
        primary: {
          DEFAULT: '#0B1B2B', // Ink Navy
          50: '#e7edf2',
          100: '#c9d6e2',
          200: '#a8bed1',
          300: '#87a7c0',
          400: '#668faf',
          500: '#4a7696',
          600: '#345b79',
          700: '#27445c',
          800: '#1a2e3f',
          900: '#0b1b2b',
          950: '#060f18',
        },
        secondary: {
          DEFAULT: '#2D4C5F', // Slate Teal
          50: '#edf2f5',
          100: '#d3dde4',
          200: '#b7c6d2',
          300: '#9bafc0',
          400: '#7f98ae',
          500: '#647f95',
          600: '#4d667a',
          700: '#3b4f5f',
          800: '#2a3844',
          900: '#1c2229',
          950: '#11161a',
        },
        sandstone: {
          DEFAULT: '#F5F1EA', // Parchment
          50: '#fbfaf7',
          100: '#f5f1ea',
          200: '#eee6da',
          300: '#e6dbc8',
          400: '#ded1b6',
          500: '#d3c6a4',
          600: '#c0b08c',
          700: '#a39272',
          800: '#7f7359',
          900: '#5b5241',
          950: '#3b352b',
        },
        coral: {
          DEFAULT: '#B96A4A', // Copper
          50: '#f8ede7',
          100: '#f0d6ca',
          200: '#e5b7a0',
          300: '#d99775',
          400: '#cc7a57',
          500: '#b96a4a',
          600: '#a35c40',
          700: '#864a34',
          800: '#693929',
          900: '#4a271d',
          950: '#2e1812',
        },
        charcoal: {
          DEFAULT: '#1A1E24', // Graphite
          50: '#eef0f3',
          100: '#d5d9df',
          200: '#b9bec8',
          300: '#9aa2ae',
          400: '#7b8390',
          500: '#5f6674',
          600: '#49505d',
          700: '#343a44',
          800: '#232730',
          900: '#1a1e24',
          950: '#0f1216',
        },
        cloud: {
          DEFAULT: '#FFFFFF', // Pure White
          50: '#ffffff',
          100: '#fdfdfc',
          200: '#fbfbf9',
          300: '#f9f8f5',
          400: '#f7f6f2',
          500: '#e1e0dd',
          600: '#c8c7c4',
          700: '#b0aeab',
          800: '#989693',
          900: '#807e7b',
          950: '#6a6865',
        },
      },
      fontFamily: {
        heading: ['"Source Serif 4"', '"Times New Roman"', 'serif'],
        body: ['"Source Sans 3"', 'Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        md: '0.5rem', // 8px
        lg: '0.75rem',  // 12px
        xl: '1.25rem',     // 20px
      },
      boxShadow: {
        subtle: '0 2px 6px rgba(15, 23, 42, 0.06)',
        elevated: '0 10px 30px rgba(15, 23, 42, 0.12)',
        premium: '0 20px 50px rgba(15, 23, 42, 0.16)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'stagger': 'stagger 0.5s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        stagger: {
          '0%': { opacity: '0', transform: 'translateY(15px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      }
    }
  },
  plugins: [],
}
