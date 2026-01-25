import { MetadataRoute } from "next";

type TManifest = () => MetadataRoute.Manifest;

const Manifest: TManifest = () => {
    return {
        background_color: "#FFFFFF",
        description: "SharpNote：你的Markdown专属写作空间。极简设计，操作直观，专注于写作本身。响应迅速，即开即用，捕捉每一个灵感瞬间。隐私安全，本地存储，所有数据全部存储于浏览器。完全开源，永久免费，开启你的写作之旅。",
        display: "standalone",
        icons: [
            {
                purpose: "any",
                sizes: "any",
                src: "/logo.svg",
                type: "image/svg"
            }
        ],
        id: "/",
        lang: "zh-cmn-Hans-CN",
        name: "SharpNote",
        orientation: "any",
        scope: "/",
        short_name: "#Note",
        start_url: "/",
        theme_color: "#000000"
    };
};

export default Manifest;
