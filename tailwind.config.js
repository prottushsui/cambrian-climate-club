const { fontFamily } = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Add navbar colors from navbar prompt
        navbar: {
          light: {
            bg: "rgb(255 255 255 / 0.8)",
            border: "rgb(229 231 235)",
            text: "rgb(17 24 39)",
            hover: "rgb(243 244 246)"
          },
          dark: {
            bg: "rgb(11 12 15 / 0.8)",
            border: "rgb(22 24 29)",
            text: "rgb(255 255 255)",
            hover: "rgb(22 24 29)"
          }
        }
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
        // Add tremor classes from alert/filter badge prompts
        'tremor-full': '9999px',
        'tremor-small': '0.375rem',
        'tremor-default': '0.5rem',
        'tremor-large': '0.75rem',
      },
      fontSize: {
        // Add tremor class from alert/filter badge prompts
        'tremor-label': ['0.75rem'],
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        // Add navbar animations from navbar prompt
        "navbar-slide-down": "navbar-slide-down 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        "navbar-dropdown": "navbar-dropdown 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        // Add navbar keyframes from navbar prompt
        "navbar-slide-down": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" }
        },
        "navbar-dropdown": {
          "0%": {
            opacity: "0",
            transform: "rotateX(-12deg) scale(0.9)"
          },
          "100%": {
            opacity: "1",
            transform: "rotateX(0) scale(1)"
          }
        }
      },
      backdropBlur: {
        // Add navbar backdrop blur from navbar prompt
        navbar: "10px"
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}
