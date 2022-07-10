/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: "jit",
	darkMode: "class",
	content: [
		"./components/**/*.{js,vue,ts}",
		"./layouts/**/*.vue",
		"./pages/**/*.vue",
		"./plugins/**/*.{js,ts}",
	],
	theme: {
		extend: {
			colors: {
				primary: "#045cd6",
				secondary: "#3c80df",
				tertiary: "#d6d6d6",
				hover: "#1d72e9",
				darkBg: "#3A4750",
				darkPrimary: "#00ADB5",
				darkSecondary: "#EEEEEE",
				light: "rgb(203 213 225)",
				black: "#303841",
			},
		},
	},
	plugins: [],
};
