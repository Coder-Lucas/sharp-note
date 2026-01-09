import * as next from "next";

const Robots: next.MetadataRoute.Robots = {
    rules: {
        allow: "/",
        disallow: ["*#*", "*?*"],
        userAgent: "*"
    },
    sitemap: "https://shnt.netlify.app/sitemap.xml"
};

export default Robots;
