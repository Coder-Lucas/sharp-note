import * as Next from "next";

const sitemap: () => Next.MetadataRoute.Sitemap = () => {
    return [
        {
            url: "https://shnt.vercel.app/",
            lastModified: new Date()
        },
        {
            url: "https://shnt.vercel.app/settings",
            lastModified: new Date()
        },
        {
            url: "https://shnt.vercel.app/about",
            lastModified: new Date()
        },
        {
            url: "https://shnt.vercel.app/docs",
            lastModified: new Date()
        }
    ];
};

export default sitemap;
