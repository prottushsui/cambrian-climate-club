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
          DEFAULT: '#0F3D5C', // Deep Ocean Blue
          '50': '#EBF2F7',
          '100': '#D1DFEA',
          '200': '#A9C7D9',
          '300': '#7FAEC8',
          '400': '#5796B7',
          '500': '#2F7DA6',
          '600': '#0F3D5C',
          '700': '#0C314A',
          '800': '#092537',
          '900': '#061925',
          '950': '#030D12',
        },
        secondary: {
          DEFAULT: '#4C8C8C', // Misty Teal
          '50': '#F2F7F7',
          '100': '#E0EEEE',
          '200': '#BDDADA',
          '300': '#99C6C6',
          '400': '#76B2B2',
          '500': '#539E9E',
          '600': '#4C8C8C',
          '700': '#3D7070',
          '800': '#2E5454',
          '900': '#1F3838',
          '950': '#101C1C',
        },
        accent: {
          DEFAULT: '#E68A7D', // Sunset Coral
          '50': '#FEF5F4',
          '100': '#FDEAE7',
          '200': '#FBD0C9',
          '300': '#F9B6AB',
          '400': '#F69C8D',
          '500': '#F3826F',
          '600': '#E68A7D',
          '700': '#CD786C',
          '800': '#B4665A',
          '900': '#9B5448',
          '950': '#824236',
        },
        background: {
          DEFAULT: '#D9C7A0', // Sandstone Beige
          '50': '#FCFBF8',
          '100': '#F8F5EF',
          '200': '#F1EAE0',
          '300': '#EADFD1',
          '400': '#E2D5C2',
          '500': '#D9C7A0',
          '600': '#BAA987',
          '700': '#9B8B6D',
          '800': '#7C6D54',
          '900': '#5D503A',
          '950': '#3E3221',
        },
        text: {
          DEFAULT: '#2E2E2E', // Charcoal Grey
          '50': '#F5F5F5',
          '100': '#EAEAEA',
          '200': '#D6D6D6',
          '300': '#C2C2C2',
          '400': '#ADADAD',
          '500': '#999999',
          '600': '#666666',
          '700': '#4D4D4D',
          '800': '#333333',
          '900': '#2E2E2E',
          '950': '#1A1A1A',
        },
        highlight: {
          DEFAULT: '#F4F4F2', // Cloud White
          '50': '#FEFEFD',
          '100': '#FBFBFA',
          '200': '#F8F8F6',
          '300': '#F5F5F3',
          '400': '#F2F2F0',
          '500': '#F4F4F2',
          '600': '#E6E6E3',
          '700': '#D8D8D4',
          '800': '#CACAC5',
          '900': '#BCBCB6',
          '950': '#AEAEA7',
        },
      }
    }
  },
  plugins: [],
}