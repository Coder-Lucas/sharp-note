import * as Next from "next";

const sitemap: () => Next.MetadataRoute.Sitemap = () => {
    return [
        {
            url: "https://shnt.netlify.app/",
            lastModified: new Date()
        },
        {
            url: "https://shnt.netlify.app/settings",
            lastModified: new Date()
        },
        {
            url: "https://shnt.netlify.app/about",
            lastModified: new Date()
        },
        {
            url: "https://shnt.netlify.app/docs",
            lastModified: new Date()
        }
    ];
};

export default sitemap;
