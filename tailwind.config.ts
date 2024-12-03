import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	container: {
  		center: true,
  		padding: "1rem",
  		screens: {
  			"2xl": "1400px",
  		},
  	},
  	extend: {
  		fontFamily: {
  			default: ["Inter Variable", ...fontFamily.sans],
  			display: ["Outfit Variable", ...fontFamily.sans],
  		},
  		colors: {
  			background: "rgb(var(--background) / <alpha-value>)",
  			foreground: "rgb(var(--foreground) / <alpha-value>)",
  			primary: {
  				DEFAULT: "rgb(var(--primary) / <alpha-value>)",
  				foreground: "rgb(var(--primary-foreground) / <alpha-value>)",
  			},
  			secondary: {
  				DEFAULT: "rgb(var(--secondary) / <alpha-value>)",
  				foreground: "rgb(var(--secondary-foreground) / <alpha-value>)",
  			},
  			muted: {
  				DEFAULT: "rgb(var(--muted) / <alpha-value>)",
  				foreground: "rgb(var(--muted-foreground) / <alpha-value>)",
  			},
  			accent: {
  				DEFAULT: "rgb(var(--accent) / <alpha-value>)",
  				foreground: "rgb(var(--accent-foreground) / <alpha-value>)",
  			},
  			card: {
  				DEFAULT: "rgb(var(--card) / <alpha-value>)",
  				foreground: "rgb(var(--card-foreground) / <alpha-value>)",
  			},
  			border: "rgb(var(--border) / <alpha-value>)",
  		},
  		borderRadius: {
  			lg: "var(--radius)",
  			md: "calc(var(--radius) - 2px)",
  			sm: "calc(var(--radius) - 4px)",
  		},
  	}
  },
  plugins: [import("tailwindcss-animate")],
};
export default config;
