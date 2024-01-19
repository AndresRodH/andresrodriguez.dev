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
				"light-green": "hsl(var(--light-green))",
			},
			typography: (theme) => ({
				DEFAULT: {
					css: {
						color: theme("colors.foreground"),
						a: {
							color: theme("colors.foreground"),
						},
					},
				},
			}),
		},
		fontFamily: {
			sans: ["Mona Sans", ...defaultTheme.fontFamily.sans],
			robot: ["Hubot Sans", ...defaultTheme.fontFamily.sans],
		},
		boxShadow: {
			DEFAULT: "0.375rem 0.375rem 0 0px hsl(var(--shadow))",
			sm: "0.125rem 0.125rem 0 0px hsl(var(--shadow))",
			none: "none",
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
