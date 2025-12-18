const config = {
    plugins: {
        autoprefixer: {
            overrideBrowserslist: ["> 1%", "last 2 versions", "Firefox ESR", "not dead"],
            grid: "autoplace",
        },
        "@tailwindcss/postcss": {
            content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
        },
    },
};

export default config;
