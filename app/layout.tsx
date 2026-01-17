import * as next from "next";
import * as react from "react";
import Header from "#/header.tsx";
import "@/globals.css";

type TLayoutProps = Readonly<{
    children: react.ReactNode;
}>;

const metadata: next.Metadata = {
    authors: {
        name: "Lucas",
        url: "https://github.com/Coder-Lucas"
    },
    appleWebApp: {
        capable: true,
        title: "SharpNote"
    },
    applicationName: "SharpNote",
    category: "笔记应用",
    classification: "在线Markdown笔记应用",
    description: "SharpNote：你的Markdown专属写作空间。极简设计，操作直观，专注于写作本身。响应迅速，即开即用，捕捉每一个灵感瞬间。隐私安全，本地存储，所有数据全部存储于浏览器。完全开源，永久免费，开启你的写作之旅。",
    formatDetection: {
        address: false,
        email: false,
        date: false,
        telephone: false,
        url: false
    },
    generator: "Next.js",
    icons: "/logo.svg",
    keywords: ["Markdown", "笔记", "写作", "极简", "免费", "开源", "在线", "PWA"],
    manifest: "/manifest.webmanifest",
    referrer: "origin",
    robots: "follow, index",
    title: "SharpNote"
};

const viewport: next.Viewport = {
    colorScheme: "light dark",
    themeColor: "#000000"
};

const Layout: react.FC<TLayoutProps> = ({ children }) => {
    return (
        <html className="bg-zinc-50 scheme-light-dark dark:bg-zinc-950" dir="ltr" lang="zh-cmn-Hans-CN">
            <body className="mt-16 flow-root font-mono text-zinc-950 dark:text-zinc-50">
                <Header></Header>
                <main className="m-4">{children}</main>
                <footer></footer>
            </body>
        </html>
    );
};

export { metadata };
export { viewport };
export default Layout;
