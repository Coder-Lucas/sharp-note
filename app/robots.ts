import * as Next from "next";

const robots: () => Next.MetadataRoute.Robots = () => {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: [
                "*?*",
                "node_modules",
                ".netlify"
            ],
        },
        sitemap: "https://shnt.netlify.app/sitemap.xml",
    };
};

export default robots;
