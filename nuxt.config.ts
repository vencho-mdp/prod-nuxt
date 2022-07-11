import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	css: ["@/assets/css/tailwind.css"],
	buildModules: [
		"@pinia/nuxt",
		"@nuxtjs/tailwindcss",
	],
	modules: ["@nuxtjs/tailwindcss"],
});
