import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				muted: "hsl(var(--muted))",
				"muted-foreground": "hsl(var(--muted-foreground))",
			},
		},
		fontFamily: {
			sans: ["Mona Sans", ...defaultTheme.fontFamily.sans],
			heading: ["Hubot Sans", ...defaultTheme.fontFamily.sans],
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
