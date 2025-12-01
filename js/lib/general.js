"use strict";

const getElements = async () =>
{
    return {
        currentArr: Array.from(document.querySelectorAll(".current"))
    };
};

export default async () =>
{
    console.info("执行通用代码");
    const elements = await getElements();
    elements.currentArr.forEach((element) =>
    {
        element.addEventListener("click", (event) =>
        {
            event.preventDefault();
        }, {
            capture: false,
            once: false,
            passive: true,
        });
    });
}
