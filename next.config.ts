import * as Next from "next";

const nextConfig: Next.NextConfig = {
    basePath: "",
    distDir: ".next",
    output: "standalone",
    reactStrictMode: true,
    pageExtensions: ["ts", "tsx", "d.ts"],
    compiler: {
        removeConsole: true,
    },
};

export default nextConfig;
