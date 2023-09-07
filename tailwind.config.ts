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
					primary: "#ca6bea",

					secondary: "#29b28d",

					accent: "#90f4a4",

					neutral: "#251e2a",

					"base-100": "#fcfcfd",

					info: "#2575e4",

					success: "#1d8743",

					warning: "#ed9735",

					error: "#da462f",
				},
			},
		],
	},
	plugins: [require("daisyui")],
};
export default config;
