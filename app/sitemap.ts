import * as Next from "next";

const sitemap: () => Next.MetadataRoute.Sitemap = () => {
    return [
        {
            url: "https://sharpnote.vercel.app/",
            lastModified: new Date()
        },
        {
            url: "https://sharpnote.vercel.app/settings",
            lastModified: new Date()
        },
        {
            url: "https://sharpnote.vercel.app/about",
            lastModified: new Date()
        },
        {
            url: "https://sharpnote.vercel.app/docs",
            lastModified: new Date()
        }
    ];
};

export default sitemap;
