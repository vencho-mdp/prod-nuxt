import { defineNuxtConfig } from "nuxt";

import Icons from "unplugin-icons/vite";

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
	modules: ["@nuxtjs/tailwindcss", "unplugin-icons/nuxt"],
	// vite: {
	// 	plugins: [
	// 		Icons({
	// 			// the feature below is experimental ⬇️
	// 			autoInstall: true,
	// 		}),
	// 	],
	// },
});
