/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.tsx"],
	theme: {
		extend: {
			backgroundImage: {
				'banner-home': "url('public/images/banner-home.jpg')",
			}
		},
	},
	plugins: [],
}

