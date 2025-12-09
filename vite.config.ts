import * as vite from "vite";
import React from "@vitejs/plugin-react-swc";

export default vite.defineConfig({
    plugins: [
        React()
    ],
    root: "./",
    base: "./",
    build: {
        outDir: "./dist",
        assetsDir: "./src/assets",
        sourcemap: true,
    },
    server: {
        host: "127.0.0.1",
        port: 8888,
        open: true,
        cors: true,
    },
    resolve: {
        alias: {
            "@": "/src",
            "@components": "/src/components",
            "@assets": "/src/assets",
            "@types": "/src/types",
            "#": "/src/components/app",
            "#header": "/src/components/header",
            "#footer": "/src/components/footer",
            "#home": "/src/components/home",
            "#settings": "/src/components/settings",
            "#about": "/src/components/about",
            "#help": "/src/components/help",
            "~": "/"
        }
    },
    css: {
        modules: {
            generateScopedName: "[name]-[local]-[hash:base64:10]",
            localsConvention: "camelCaseOnly"
        }
    }
});
