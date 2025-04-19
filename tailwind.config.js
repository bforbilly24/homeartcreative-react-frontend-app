/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))', // Fixed typo
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))',
        },
      },
      keyframes: {
        appear: {
          '0%': {
            opacity: '0',
            transform: 'translateY(1rem)',
            filter: 'blur(.5rem)',
          },
          '50%': {
            filter: 'blur(0)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
            filter: 'blur(0)',
          },
        },
        'appear-zoom': {
          '0%': {
            opacity: '0',
            transform: 'scale(.5)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
        'pulse-hover': {
          '0%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
          '50%': {
            opacity: '0.5',
            transform: 'translateY(-1rem)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        hover: {
          '0%': {
            transform: 'translateY(0) translateX(0)',
          },
          '50%': {
            transform: 'translateY(-1rem) translateX(1rem)',
          },
          '100%': {
            transform: 'translateY(0) translateX(0)',
          },
        },
        'hover-reverse': {
          '0%': {
            transform: 'translateY(0) translateX(0)',
          },
          '50%': {
            transform: 'translateY(1rem) translateX(1rem)',
          },
          '100%': {
            transform: 'translateY(0) translateX(0)',
          },
        },
        'pulse-fade': {
          '0%': {
            opacity: '1',
          },
          '50%': {
            opacity: '0.3',
          },
          '100%': {
            opacity: '1',
          },
        },
        'border-beam': {
          '100%': {
            'offset-distance': '100%',
          },
        },
        'marquee-vertical': {
          from: {
            transform: 'translateY(0)',
          },
          to: {
            transform: 'translateY(calc(-100% - var(--gap)))',
          },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(-100% - var(--gap)))' },
        },
        'marquee-vertical': {
          from: { transform: 'translateY(0)' },
          to: { transform: 'translateY(calc(-100% - var(--gap)))' },
        },
      },
      animation: {
        'shiny-text': 'shiny-text 8s infinite',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        appear: 'appear 0.6s forwards ease-out',
        'appear-zoom': 'appear-zoom 0.6s forwards ease-out',
        'pulse-hover': 'pulse-hover 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'border-beam': 'border-beam calc(var(--duration)*1s) infinite linear',
        marquee: 'marquee var(--duration) infinite linear',
        'marquee-vertical': 'marquee-vertical var(--duration) linear infinite',
      },
      spacing: {
        container: '1280px',
      },
      boxShadow: {
        'glow-sm': '0 0 16px 0 hsla(var(--foreground) / 0.08) inset',
        'glow-md': '0 0 32px 0 hsla(var(--foreground) / 0.08) inset',
        'glow-lg': '0 0 64px 0 hsla(var(--foreground) / 0.06) inset',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
