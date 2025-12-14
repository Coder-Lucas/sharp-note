import * as Next from "next";

const manifest: () => Next.MetadataRoute.Manifest = () => {
    return {
        name: "SharpNote",
        short_name: "SharpNote",
        id: "/",
        start_url: "/",
        scope: "/",
        lang: "zh-cmn-Hans-CN",
        description: "SharpNote是一款开源在线笔记应用，使用Markdown格式，并且极其注重个人隐私，所有数据全部位于本机储存。",
        display: "standalone",
        orientation: "any",
        background_color: "#FFFFFF",
        theme_color: "#000000",
        icons: [
            {
                src: "/favicon.svg",
                sizes: "any",
                type: "image/svg",
                purpose: "maskable"
            }
        ]
    };
};

export default manifest;
