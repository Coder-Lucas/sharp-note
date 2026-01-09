import * as next from "next";

const Sitemap: next.MetadataRoute.Sitemap = [
    {
        lastModified: new Date(),
        url: "https://shnt.netlify.app/"
    },
    {
        lastModified: new Date(),
        url: "https://shnt.netlify.app/func"
    },
    {
        lastModified: new Date(),
        url: "https://shnt.netlify.app/settings"
    },
    {
        lastModified: new Date(),
        url: "https://shnt.netlify.app/about"
    },
    {
        lastModified: new Date(),
        url: "https://shnt.netlify.app/docs"
    }
];

export default Sitemap;
