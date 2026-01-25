import Footer from "#/footer.tsx";
import Header from "#/header.tsx";
import { Metadata, Viewport } from "next";
import { ReactNode, FC } from "react";
import "@styles/main.css";

type TRootLayoutProps = Readonly<{
    children: ReactNode;
}>;

const metadata: Metadata = {
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
    keywords: ["Markdown", "PWA", "免费", "写作", "在线", "开源", "极简", "笔记"],
    manifest: "/manifest.webmanifest",
    referrer: "origin",
    robots: "follow, index",
    title: "SharpNote"
};

const viewport: Viewport = {
    colorScheme: "light dark",
    themeColor: "#000000"
};

const RootLayout: FC<TRootLayoutProps> = ({ children }) => {
    return (
        <html className="bg-zinc-50 text-base scheme-light-dark dark:bg-zinc-950" dir="ltr" lang="zh-cmn-Hans-CN">
            <body className="mt-16 flow-root font-serif text-zinc-950 dark:text-zinc-50">
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
};

export { metadata, viewport };
export default RootLayout;
