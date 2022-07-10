import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	css: ["@/assets/css/tailwind.css"],
	build: {
		postcss: {
			postcssOptions: {
				plugins: {
					tailwindcss: {},
					autoprefixer: {},
				},
			},
		},
	},
	buildModules: [
		["@pinia/nuxt", { disableVuex: true }],
		["@nuxtjs/tailwindcss", { config: "@/tailwind.config.js" }],
	],
	modules: ["@nuxtjs/tailwindcss"],
});
