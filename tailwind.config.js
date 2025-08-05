/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '100px',
				sm: '20px',
				lg: '50px',
				xl: '100px',
				'2xl': '100px',
			},
		},
	},
	fontFamily: {
		orbitron: ['Orbitron', 'sans-serif'],
		poppins: ['Poppins', 'sans-serif'],
	},
	extend: {},
}
