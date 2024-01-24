import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel/static";
import catpuccinTheme from "./shiki/catppuccin.json"; // customized catpuccin mocha theme - no italics
import { transformerNotationDiff } from "shikiji-transformers";

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
	],
	output: "static",
	adapter: vercel({
		imageService: true,
		webAnalytics: true,
	}),
	markdown: {
		shikiConfig: {
			theme: catpuccinTheme,
			transformers: [transformerNotationDiff()],
		},
	},
});
