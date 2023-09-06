import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		},
	},
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: "#a02108",
					secondary: "#e804a7",
					accent: "#b26430",
					neutral: "#1a1221",
					"base-100": "#f7f1f8",
					info: "#6f90d3",
					success: "#25e478",
					warning: "#dd9b0e",
					error: "#e22222",
				},
			},
		],
	},
	plugins: [require("daisyui")],
};
export default config;
