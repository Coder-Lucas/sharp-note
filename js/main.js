"use strict";

import runIndex from "/js/lib/index.js";
import runSettings from "/js/lib/settings.js";
import runAchvs from "/js/lib/achvs.js";
import runAbout from "/js/lib/about.js";
import runGeneral from "/js/lib/general.js";

(() =>
{
    try
    {
        console.info("检测当前所在网页");
        switch (document.body.className)
        {
            case "index":
                runIndex();
                break;
            case "settings":
                runSettings();
                break;
            case "achvs":
                runAchvs();
                break;
            case "about":
                runAbout();
                break;
        }
    } catch (error)
    {
        console.error("出现未知错误 ", error);
    }
    try
    {
        runGeneral();
    } catch (error)
    {
        console.error("出现未知错误 ", error);
    }
})();
