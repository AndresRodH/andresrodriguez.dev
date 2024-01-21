import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				border: "hsl(var(--border))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				muted: "hsl(var(--muted))",
				"muted-foreground": "hsl(var(--muted-foreground))",
				shadow: "hsl(var(--shadow))",
				"light-blue": "hsl(var(--light-blue))",
				"hot-pink": "hsl(var(--hot-pink))",
			},
			typography: (theme) => ({
				DEFAULT: {
					css: {
						color: theme("colors.foreground"),
						a: {
							color: theme("colors.foreground"),
							textDecorationThickness: "2px",
							textUnderlineOffset: "2px",
							textDecorationColor: theme("colors.hot-pink"),
						},
						pre: {
							borderRadius: "none",
						},
					},
				},
			}),
			fontFamily: {
				sans: ["Mona Sans", ...defaultTheme.fontFamily.sans],
				robot: ["Hubot Sans", ...defaultTheme.fontFamily.sans],
				mono: ["JetBrains Mono", ...defaultTheme.fontFamily.mono],
			},
			boxShadow: {
				DEFAULT: "0.375rem 0.375rem 0 0px hsl(var(--shadow))",
				sm: "0.125rem 0.125rem 0 0px hsl(var(--shadow))",
				none: "none",
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
