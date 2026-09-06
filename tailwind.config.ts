import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "#08090B",
          secondary: "#0E1014",
          card: "#12151A",
          elevated: "#171A21",
        },
        text: {
          primary: "#F5F7FA",
          secondary: "#A7AFBD",
          muted: "#737B89",
        },
        accent: {
          primary: "#7C5CFF",
          cyan: "#22D3EE",
          success: "#22C55E",
        },
        border: {
          subtle: "rgba(255, 255, 255, 0.08)",
          glow: "rgba(124, 92, 255, 0.25)",
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      },
      boxShadow: {
        'card-glow': '0 0 35px -5px rgba(124, 92, 255, 0.12)',
        'accent-glow': '0 0 25px rgba(124, 92, 255, 0.3)',
        'cyan-glow': '0 0 25px rgba(34, 211, 238, 0.25)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
};

export default config;
