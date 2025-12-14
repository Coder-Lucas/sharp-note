import * as Next from "next";
import * as React from "react";

const metadata: Next.Metadata = {
    title: "SharpNote",
    description: "SharpNote是一款开源在线笔记应用，使用Markdown格式，并且极其注重个人隐私，所有数据全部位于本机储存。"
};

const Layout: React.FC<{ readonly children: React.ReactNode; }> = ({children}) => {
    return (
        <html dir="ltr" lang="zh-cmn-Hans-CN">
            <body>
                <header></header>
                {children}
                <footer></footer>
                {process.env.ANALYSIS_TOKEN && <script dangerouslySetInnerHTML={{__html: `var _hmt=_hmt||[];(function(){var hm=document.createElement("script");hm.src="https://hm.baidu.com/hm.js?${process.env.ANALYSIS_TOKEN}";var s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(hm,s);})();`}}></script>}
            </body>
        </html>
    );
};

export {metadata};
export default Layout;
