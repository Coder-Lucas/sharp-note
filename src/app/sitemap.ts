import { MetadataRoute } from "next";

type TSitemap = () => MetadataRoute.Sitemap;

const Sitemap: TSitemap = () => {
    return [
        {
            lastModified: new Date(),
            url: "https://shnt.netlify.app"
        },
        {
            lastModified: new Date(),
            url: "https://shnt.netlify.app/fn"
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
};

export default Sitemap;
