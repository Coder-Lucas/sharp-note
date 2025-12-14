import * as Next from "next";

const robots: () => Next.MetadataRoute.Robots = () => {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: "*?*",
        },
    };
};

export default robots;
