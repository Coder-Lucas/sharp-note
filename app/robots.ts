import * as Next from "next";

const robots: () => Next.MetadataRoute.Robots = () => {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: "*?*",
        },
        sitemap: "https://shnt.vercel.app/sitemap.xml",
    };
};

export default robots;
