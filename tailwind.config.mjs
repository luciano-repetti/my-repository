/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'scooter': {
					'50': '#ebffff',
					'100': '#cdfbff',
					'200': '#a1f4ff',
					'300': '#60ebff',
					'400': '#07cff2',
					'500': '#00b9de',
					'600': '#0093bb',
					'700': '#077697',
					'800': '#105f7a',
					'900': '#124f67',
					'950': '#053347',
				},
			},	
		},
	},
	plugins: [],
}
