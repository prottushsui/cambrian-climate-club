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
        // Cambrian Climate Club Official Palette
        primary: {
          DEFAULT: '#0F3D5C', // Deep Ocean Blue
          50: '#e6eef3',
          100: '#c2d7e0',
          200: '#9bc0ce',
          300: '#74a8bb',
          400: '#4d8fa9',
          500: '#267796',
          600: '#0F3D5C', // Original
          700: '#0c3048',
          800: '#092334',
          900: '#061620',
          950: '#030a10',
        },
        secondary: {
          DEFAULT: '#4C8C8C', // Misty Teal
          50: '#f0f6f6',
          100: '#d9e7e7',
          200: '#bacede',
          300: '#9fb5b5',
          400: '#849c9c',
          500: '#698484',
          600: '#4C8C8C', // Original
          700: '#3a6d6d',
          800: '#284e4e',
          900: '#162f2f',
          950: '#0b1818',
        },
        sandstone: {
          DEFAULT: '#D9C7A0', // Background/Sandstone Beige
          50: '#fcfaf6',
          100: '#f6f1ea',
          200: '#eee2d2',
          300: '#e5d3ba',
          400: '#ddc4a2',
          500: '#d5b58a',
          600: '#D9C7A0', // Original
          700: '#bdaa88',
          800: '#a08d70',
          900: '#847058',
          950: '#675340',
        },
        coral: {
          DEFAULT: '#E68A7D', // Sunset Coral Accent
          50: '#fdf0ee',
          100: '#fbe0dc',
          200: '#f7c1ba',
          300: '#f3a297',
          400: '#ef8375',
          500: '#E68A7D', // Original
          600: '#d76d5e',
          700: '#c35142',
          800: '#ae3526',
          900: '#9a190a',
          950: '#860d00',
        },
        charcoal: {
          DEFAULT: '#2E2E2E', // Text/Charcoal Grey
          50: '#ebebeb',
          100: '#d1d1d1',
          200: '#b7b7b7',
          300: '#9d9d9d',
          400: '#838383',
          500: '#696969',
          600: '#2E2E2E', // Original
          700: '#262626',
          800: '#1e1e1e',
          900: '#161616',
          950: '#0e0e0e',
        },
        cloud: {
          DEFAULT: '#F4F4F2', // Cloud White
          50: '#fdfdfd',
          100: '#fbfbfa',
          200: '#f8f8f7',
          300: '#f6f6f4',
          400: '#f4f4f2', // Original
          500: '#dcdcd9',
          600: '#c4c4c1',
          700: '#aca9a9',
          800: '#949191',
          900: '#7c7979',
          950: '#646161',
        },
      },
      fontFamily: {
        heading: ['SF Pro Display', 'Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        md: '0.625rem', // 10px
        lg: '0.75rem',  // 12px
        xl: '1rem',     // 16px
      },
      boxShadow: {
        subtle: '0 2px 8px rgba(0, 0, 0, 0.05)',
        elevated: '0 4px 16px rgba(0, 0, 0, 0.08)',
        premium: '0 8px 32px rgba(0, 0, 0, 0.12)',
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