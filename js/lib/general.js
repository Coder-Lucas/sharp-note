"use strict";

const getElements = async () =>
{
    return {
        currentArr: document.querySelectorAll(".current")
    };
};

export default async () =>
{
    console.info("执行通用代码");
    const elements = await getElements();
    const startYear = 2025;
    const currentYear = new Date().getFullYear();
    const copyrightYear = document.querySelector(".year");
    if (currentYear > startYear)
    {
        copyrightYear.textContent = startYear.toString().concat("-", currentYear.toString());
    } else
    {
        copyrightYear.textContent = startYear.toString();
    }
    elements.currentArr.forEach((element) =>
    {
        element.addEventListener("click", (event) =>
        {
            event.preventDefault();
        });
    });
}
