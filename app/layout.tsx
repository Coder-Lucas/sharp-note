import * as Next from "next";
import * as React from "react";
import Analysis from "#/analysis.tsx";
import Header from "#/header.tsx";
import "@/globals.css";

type TProps = Readonly<{
    children: React.ReactNode;
}>;

const metadata: Next.Metadata = {
    title: "SharpNote",
    description: "SharpNote是一款开源在线笔记应用，使用Markdown格式，并且极其注重个人隐私，所有数据全部位于本机储存。",
};

const Layout: React.FC<TProps> = ({ children }) => {
    return (
        <html className="scroll-smooth bg-zinc-50 dark:bg-zinc-950" dir="ltr" lang="zh-cmn-Hans-CN">
            <body className="mt-16 bg-transparent">
                <Header></Header>
                {children}
                <footer></footer>
                <Analysis></Analysis>
            </body>
        </html>
    );
};

export { metadata };
export default Layout;
