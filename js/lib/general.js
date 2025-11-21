"use strict";

export default () =>
{
    console.info("执行通用代码");
    document.querySelectorAll(".current").forEach((element) =>
    {
        element.addEventListener("click", (event) =>
        {
            event.preventDefault();
        });
    });
}
