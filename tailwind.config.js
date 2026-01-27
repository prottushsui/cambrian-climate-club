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
        primary: {
          50: '#e6f0f7',
          100: '#cce1ef',
          200: '#99c4dd',
          300: '#66a7cb',
          400: '#338bb9',
          500: '#0F3D5C', // Deep Ocean Blue
          600: '#0c314a',
          700: '#092537',
          800: '#061a25',
          900: '#030e12',
        },
        secondary: {
          50: '#eaf4f4',
          100: '#d5e8e8',
          200: '#abcfcf',
          300: '#80b7b7',
          400: '#559e9e',
          500: '#4C8C8C', // Misty Teal
          600: '#3d7070',
          700: '#2e5454',
          800: '#1f3838',
          900: '#0f1c1c',
        },
        accent: {
          50: '#fdf2f0',
          100: '#fbe5e0',
          200: '#f7c7bd',
          300: '#f2a99a',
          400: '#ee8c77',
          500: '#E68A7D', // Sunset Coral
          600: '#b86e64',
          700: '#8a524b',
          800: '#5c3632',
          900: '#2e1b19',
        },
        sandstone: {
          50: '#fbf9f4',
          100: '#f7f2e9',
          200: '#eee5d4',
          300: '#e4d7be',
          400: '#dacab9',
          500: '#D9C7A0', // Sandstone Beige
          600: '#ae9f80',
          700: '#827760',
          800: '#574f40',
          900: '#2b2720',
        },
        charcoal: {
          50: '#f8f8f8',
          100: '#f0f0f0',
          200: '#e0e0e0',
          300: '#d1d1d1',
          400: '#a3a3a3',
          500: '#2E2E2E', // Charcoal Grey
          600: '#262626',
          700: '#1e1e1e',
          800: '#161616',
          900: '#0e0e0e',
        },
        cloud: {
          50: '#fdfdfd',
          100: '#fbfbfb',
          200: '#f8f8f8',
          300: '#f5f5f5',
          400: '#f2f2f2',
          500: '#F4F4F2', // Cloud White
          600: '#c3c3c2',
          700: '#929291',
          800: '#616161',
          900: '#313130',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        'lg': '0.75rem',
      },
      spacing: {
        '4.5': '1.125rem',
        '9': '2.25rem',
        '18': '4.5rem',
        '22': '5.5rem',
        '28': '7rem',
        '36': '9rem',
        '44': '11rem',
        '52': '13rem',
        '60': '15rem',
      },
      boxShadow: {
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
      transitionTimingFunction: {
        'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        '300': '300ms',
        '500': '500ms',
        '700': '700ms',
      },
    }
  },
  plugins: [],
}