/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		colors: {
			'primary': '#FFFFFF',
			'secondary': '#3E8914',
			'tertiary': '#AFFC41',
			'black': '#000000',
			'white': '#FFFFFF'
		}
	},
	plugins: [],
})
