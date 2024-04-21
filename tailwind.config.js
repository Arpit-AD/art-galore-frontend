/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				maroonRed: "#7f0a19",
				dark: "#474747",
			},
		},
		screens: {
			sm: "640px",
			// => @media (min-width: 640px) { ... }

			md: "768px",
			// => @media (min-width: 768px) { ... }

			lg: "1024px",
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
