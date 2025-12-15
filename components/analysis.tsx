"use client";
import NextScript from "next/script";
import * as React from "react";

const Analysis: React.FC = () => {
    return (
        process.env.ANALYSIS_TOKEN ? <NextScript dangerouslySetInnerHTML={
            {
                __html: `
                    var window._hmt=window._hmt||[];
                    (function(){var hm=document.createElement("script");
                    hm.src="https://hm.baidu.com/hm.js?${process.env.ANALYSIS_TOKEN}";
                    var s=document.getElementsByTagName("script")[0];
                    s.parentNode.insertBefore(hm,s);
                    })();
                `
            }
        } id="analysis" strategy="afterInteractive"></NextScript> : null
    );
};

export default Analysis;
