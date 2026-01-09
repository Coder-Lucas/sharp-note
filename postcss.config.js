const config = {
    plugins: {
        "@tailwindcss/postcss": {
            content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"]
        },
        autoprefixer: {
            grid: "autoplace",
            overrideBrowserslist: ["> 1%", "Firefox ESR", "last 2 versions", "not dead"]
        }
    }
};

export default config;
