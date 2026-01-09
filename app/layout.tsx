import * as next from "next";
import * as react from "react";
import Header from "#/header.tsx";
import "@/globals.css";

type TLayoutProps = Readonly<{
    children: react.ReactNode;
}>;

const metadata: next.Metadata = {
    description: "SharpNote：你的Markdown专属写作空间。极简设计，操作直观，专注于写作本身。响应迅速，即开即用，捕捉每一个灵感瞬间。隐私安全，本地存储，所有数据全部存储于浏览器。完全开源，永久免费，开启你的写作之旅。",
    icons: "/logo.svg",
    title: "SharpNote"
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
export default Layout;
