import type { Config } from 'tailwindcss'

const config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Climate Club Brand Palette (from design brief)
        'ocean': '#0F3D5C',           // Deep Ocean Blue - Primary
        'teal': '#4C8C8C',            // Misty Teal - Secondary
        'sand': '#D9C7A0',            // Sandstone Beige - Background/Neutral
        'coral': '#E68A7D',           // Sunset Coral - Accent
        'charcoal': '#2E2E2E',        // Charcoal Grey - Text/Contrast
        'cloud': '#F4F4F2',           // Cloud White - Highlight

        // Extended semantic colors for UI
        'background': '#F4F4F2',
        'foreground': '#2E2E2E',
        'border': '#D9C7A0',
        'muted': 'rgba(76, 140, 140, 0.15)',
        'muted-foreground': '#4C8C8C',
      },
      backgroundColor: {
        'primary': '#0F3D5C',
        'secondary': '#4C8C8C',
        'neutral': '#D9C7A0',
        'accent': '#E68A7D',
      },
      textColor: {
        'primary': '#0F3D5C',
        'secondary': '#4C8C8C',
        'base': '#2E2E2E',
        'accent': '#E68A7D',
        'muted': '#4C8C8C',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Georgia', 'serif'],
      },
      fontSize: {
        // Typography scale
        'xs': ['12px', { lineHeight: '16px', letterSpacing: '-0.01em' }],
        'sm': ['14px', { lineHeight: '20px', letterSpacing: '-0.01em' }],
        'base': ['16px', { lineHeight: '24px', letterSpacing: '-0.01em' }],
        'lg': ['18px', { lineHeight: '28px', letterSpacing: '-0.01em' }],
        'xl': ['20px', { lineHeight: '28px', letterSpacing: '-0.02em' }],
        '2xl': ['24px', { lineHeight: '32px', letterSpacing: '-0.02em' }],
        '3xl': ['30px', { lineHeight: '36px', letterSpacing: '-0.02em' }],
        '4xl': ['36px', { lineHeight: '44px', letterSpacing: '-0.02em' }],
        '5xl': ['48px', { lineHeight: '52px', letterSpacing: '-0.02em' }],
      },
      spacing: {
        // Consistent spacing scale
        0: '0',
        1: '4px',
        2: '8px',
        3: '12px',
        4: '16px',
        5: '20px',
        6: '24px',
        7: '28px',
        8: '32px',
        9: '36px',
        10: '40px',
        12: '48px',
        14: '56px',
        16: '64px',
        20: '80px',
        24: '96px',
        28: '112px',
        32: '128px',
      },
      borderRadius: {
        'sm': '8px',
        'md': '12px',
        'lg': '16px',
        'xl': '20px',
        '2xl': '24px',
        'full': '9999px',
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(15, 61, 92, 0.05)',
        'base': '0 1px 3px 0 rgba(15, 61, 92, 0.1), 0 1px 2px 0 rgba(15, 61, 92, 0.06)',
        'md': '0 4px 6px -1px rgba(15, 61, 92, 0.1), 0 2px 4px -1px rgba(15, 61, 92, 0.06)',
        'lg': '0 10px 15px -3px rgba(15, 61, 92, 0.1), 0 4px 6px -2px rgba(15, 61, 92, 0.05)',
        'xl': '0 20px 25px -5px rgba(15, 61, 92, 0.1), 0 10px 10px -5px rgba(15, 61, 92, 0.04)',
        '2xl': '0 25px 50px -12px rgba(15, 61, 92, 0.15)',
        'inner': 'inset 0 2px 4px 0 rgba(15, 61, 92, 0.06)',
        'none': 'none',
      },
      animation: {
        'fadeInUp': 'fadeInUp 0.6s cubic-bezier(0.22, 0.61, 0.36, 1) forwards',
        'slideInLeft': 'slideInLeft 0.6s cubic-bezier(0.22, 0.61, 0.36, 1) forwards',
        'slideInRight': 'slideInRight 0.6s cubic-bezier(0.22, 0.61, 0.36, 1) forwards',
        'scaleIn': 'scaleIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      transitionTimingFunction: {
        'premium': 'cubic-bezier(0.22, 0.61, 0.36, 1)',
      },
    },
  },
  plugins: [],
} satisfies Config

export default config
