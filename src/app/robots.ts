import { MetadataRoute } from "next";

type TRobots = () => MetadataRoute.Robots;

const Robots: TRobots = () => {
    return {
        host: "https://shnt.netlify.app",
        rules: {
            allow: "/",
            disallow: ["*#*", "*?*"],
            userAgent: "*"
        },
        sitemap: "https://shnt.netlify.app/sitemap.xml"
    };
};

export default Robots;
