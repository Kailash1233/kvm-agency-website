import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                "hero-abstract":
                    "url('https://raw.githubusercontent.com/fernanbae/dksi-company-profile/main/src/assets/element/hero-abstract.svg')",
            },
            colors: {
                "darken-jungle-green": "#0B1F2A",
                "metallic-sunburst": "#AA823C",
                lotion: "#FBFBFB",
                "anti-flash-white": "#F2F2F2",
                "satin-sheen-gold": "#CA9D42",
                eggshell: "#F4EBD9",
                "ghost-white": "#f9fafe",
            },
            fontFamily: {
                sans: ['"Inter"', ...defaultTheme.fontFamily.sans],
            },
            keyframes: {
                "spin-reverse": {
                    to: { transform: "rotate(-360deg)" },
                },
            },
            animation: {
                "spin-slow": "spin 30s linear infinite",
                "spin-reverse-slow": "spin-reverse 25s linear infinite",
            },
        },
    },
    plugins: [],
};
