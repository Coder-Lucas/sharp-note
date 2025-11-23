"use strict";

export default () =>
{
    console.info("执行index.html代码");
    const startYear = 2025;
    const currentYear = new Date().getFullYear();
    const copyrightYear = document.querySelector(".year");
    const tb = document.querySelector(".table-body");

    if (currentYear > startYear)
    {
        copyrightYear.textContent = startYear.toString().concat("-", currentYear.toString());
    } else
    {
        copyrightYear.textContent = startYear.toString();
    }
    document.querySelector(".is-add").addEventListener("click", () =>
    {
        console.info("add按钮被点击");
        alert("编写中 清空按钮已可用");
    });
    document.querySelector(".is-remove").addEventListener("click", () =>
    {
        console.info("remove按钮被点击");

    });
    document.querySelector(".is-clear").addEventListener("click", () =>
    {
        console.info("clear按钮被点击");
        const empty = document.createElement("div");
        empty.className = "empty";
        empty.textContent = "暂无任务";
        if (confirm("确定要清除任务吗？"))
        {
            tb.replaceChildren();
            tb.appendChild(empty);
        }
    });
}
