import type { Config } from "tailwindcss";
import { withUt } from "uploadthing/tw";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            animation: {
                moveAuth: "moveAuth 0.6s",
            },
            keyframes: {
                moveAuth: {
                    "0%": {
                        opacity: "0",
                        zIndex: "1",
                    },
                    "50%": { transform: "rotate(3deg)" },
                },
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [],
};
export default config;
