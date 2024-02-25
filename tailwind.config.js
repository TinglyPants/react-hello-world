/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                Roboto: ["Roboto", "sans-serif"],
            },
        },
        colors: {
            "gray-primary": "#25282a",
            "gray-secondary": "#555555",
            "gray-tertiary": "#161819",
            highlight: "#ff7518",
            white: "#ffffff",
        },
    },
    plugins: [
        plugin(function ({ addUtilities }) {
            addUtilities({
                ".no-scrollbar::-webkit-scrollbar": { display: "none" },
                ".no-scrollbar": {
                    "-ms-overflow-style": "none",
                    "scrollbar-width": "none",
                },
            });
        }),
    ],
};
