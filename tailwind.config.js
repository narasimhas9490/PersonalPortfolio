/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      colors: {
        border: '#e5e7eb',
        input: '#f9fafb',
        ring: '#000000',
        background: '#ffffff',
        foreground: '#000000',
        primary: {
          DEFAULT: '#000000',
          foreground: '#ffffff',
        },
        secondary: {
          DEFAULT: '#f8f9fa',
          foreground: '#000000',
        },
        destructive: {
          DEFAULT: '#ef4444',
          foreground: '#ffffff',
        },
        muted: {
          DEFAULT: '#f8f9fa',
          foreground: '#6b7280',
        },
        accent: {
          DEFAULT: '#f8f9fa',
          foreground: '#000000',
        },
        popover: {
          DEFAULT: '#ffffff',
          foreground: '#000000',
        },
        card: {
          DEFAULT: '#ffffff',
          foreground: '#000000',
        },
      },
      borderRadius: {
        lg: '0.5rem',
        md: '0.375rem',
        sm: '0.25rem',
      },
    },
  },
  plugins: [],
}