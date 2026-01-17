const config = {
    plugins: {
        "@tailwindcss/postcss": {
            content: ["app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}"]
        }
    }
};

export default config;
