import * as Next from "next";

type TRobots = () => Next.MetadataRoute.Robots;

const Robots: TRobots = () => {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: ["*?*", "node_modules", ".netlify"],
        },
        sitemap: "https://shnt.netlify.app/sitemap.xml",
    };
};

export default Robots;
