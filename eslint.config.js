import ESLintConfigNext from "eslint-config-next";
import * as eslintConfig from "eslint/config";

const config = eslintConfig.defineConfig([...ESLintConfigNext]);

export default config;
