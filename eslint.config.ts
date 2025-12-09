import * as js from "@eslint/js";
import * as globals from "globals";
import * as reactHooks from "eslint-plugin-react-hooks";
import * as reactRefresh from "eslint-plugin-react-refresh";
import * as eslint from "typescript-eslint";
import * as eslintConfig from "eslint/config";

export default eslintConfig.defineConfig([
    eslintConfig.globalIgnores(["dist"]),
    {
        files: [
            "**/*.{ts,tsx}"
        ],
        ignores: [
            "/node_modules/**",
            "/dist/**"
        ],
        extends: [
            js.configs.recommended,
            eslint.configs.recommended,
            reactHooks.configs.flat.recommended,
            reactRefresh.configs.vite,
        ],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
        },
    },
]);
