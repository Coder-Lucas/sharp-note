import {defineConfig} from "vite";
import React from "@vitejs/plugin-react-swc";

export default defineConfig({
    plugins: [React()],
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
            "#": "/src/components",
            "~": "/src/assets"
        }
    },
    css: {
        modules: {
            generateScopedName: "[name]-[local]-[hash:base64:10]",
            localsConvention: "camelCaseOnly"
        }
    }
});
