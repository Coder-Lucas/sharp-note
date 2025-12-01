"use strict";

import runIndex from "/js/lib/index.js";
import runSettings from "/js/lib/settings.js";
import runAchvs from "/js/lib/achvs.js";
import runAbout from "/js/lib/about.js";
import runGeneral from "/js/lib/general.js";

(async () =>
{
    try
    {
        console.info("检测当前所在网页");
        switch (document.body.className)
        {
            case "index":
                await runIndex();
                break;
            case "settings":
                await runSettings();
                break;
            case "achvs":
                await runAchvs();
                break;
            case "about":
                await runAbout();
                break;
            default:
                console.info("该页面无需执行特定页面代码");
                break;
        }
    } catch (error)
    {
        console.error("出现未知错误 ", error);
    }
    try
    {
        await runGeneral();
    } catch (error)
    {
        console.error("出现未知错误 ", error);
    }
})();
