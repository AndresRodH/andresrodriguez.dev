import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel/static";
import catpuccinTheme from "./shiki/catppuccin.json"; // customized catpuccin mocha theme - no italics
import expressiveCode from "astro-expressive-code";
const SERVER_PORT = 3000;
const LOCALHOST_URL = `http://localhost:${SERVER_PORT}`;
const LIVE_URL = "https://andresrodriguez.dev";
const SCRIPT = process.env.npm_lifecycle_script || "";
const isBuild = SCRIPT.includes("astro build");
let BASE_URL = LOCALHOST_URL;
if (isBuild) {
	BASE_URL = LIVE_URL;
}

// https://astro.build/config
export default defineConfig({
	server: {
		port: SERVER_PORT,
	},
	site: BASE_URL,
	integrations: [
		tailwind({
			applyBaseStyles: false,
		}),
		sitemap(),
		expressiveCode({
			themes: [catpuccinTheme],
			frames: {
				showCopyToClipboardButton: false,
			},
			styleOverrides: {
				borderRadius: "0px",
				borderWidth: "1px",
				borderColor: "hsl(var(--border))",
				uiFontFamily: "JetBrains Mono",
				codeFontFamily: "JetBrains Mono",
				frames: {
					frameBoxShadowCssValue: "none",
				},
			},
		}),
	],
	output: "static",
	adapter: vercel({
		imageService: true,
		webAnalytics: true,
	}),
});

