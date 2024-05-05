/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'teal': '#146c78',
				'light-teal': '#5a98a0',
				'background': '#d0e1e4',
				'white': '#f9f9f9'
			},
			fontFamily: {
				'helvetica-black': ['HelveticaNowText-Black', 'arial']
			},
			screens: {
				'phone': '480px',
				'tablet': '768px',
				'laptop': '976px',
				'desktop': '1440px',
			}
		},
	},
	plugins: [],
}