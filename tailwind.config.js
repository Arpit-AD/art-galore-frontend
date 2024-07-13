/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				maroonRed: "#7f0a19",
				dark: "#666666",
			},
			spacing: {
				128: "29rem",
			},
		},
		fontSize: {
			xxs: "0.6rem",
			xs: "0.75rem",
			sm: "0.8rem",
			base: "0.99rem",
			xl: "1.25rem",
			"2xl": "1.563rem",
			"3xl": "1.953rem",
			"4xl": "2.441rem",

			"5xl": "3.052rem",
		},
		screens: {
			xs: "396px",
			// => @media (min-width: 390px) { ... }

			sm: "640px",
			// => @media (min-width: 640px) { ... }

			md: "769px",
			// => @media (min-width: 769px) { ... }

			lg: "1025px",
			// => @media (min-width: 1024px) { ... }

			xl: "1280px",
			// => @media (min-width: 1280px) { ... }

			"2xl": "1536px",
			// => @media (min-width: 1536px) { ... }
		},
		keyframes: {
			"slide-in": {
				"0%": {
					"-webkit-transform": "translateX(-100%)",
					transform: "translateX(-100%)",
				},
				"100%": {
					"-webkit-transform": "translateX(0%)",
					transform: "translateX(0%)",
				},
			},
			"slide-down": {
				"0%": {
					"-webkit-transform": "translateY(-10%)",
					transform: "translateY(-10%)",
				},
				"100%": {
					"-webkit-transform": "translateY(0%)",
					transform: "translateY(0%)",
				},
			},
		},
		animation: {
			"slide-in": "slide-in 700ms ease-in-out",
			"slide-down": "slide-down 700ms ease-in-out",
		},
	},
	plugins: [],
};
