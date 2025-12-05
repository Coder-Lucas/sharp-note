"use strict";

const getElements = async () =>
{
    return {
        tb: document.querySelector(".table-body"),
        add: document.querySelector(".add"),
        clear: document.querySelector(".clear"),
        modalAdd: document.querySelector(".modal-add")
    };
};

const render = async () =>
{

};

export default async () =>
{
    console.info("执行index.html代码");
    const elements = await getElements();
    elements.add.addEventListener("click", () =>
    {
        console.info("add按钮被点击");
        elements.modalAdd.showModal();
    }, {
        capture: false,
        once: false,
        passive: true
    });
    elements.clear.addEventListener("click", () =>
    {
        console.info("clear按钮被点击");
        const empty = document.createElement("div");
        empty.className = "cell empty";
        empty.textContent = "暂无任务";
        if (confirm("确定要清除任务吗？"))
        {
            elements.tb.replaceChildren();
            elements.tb.appendChild(empty);
        }
    }, {
        capture: false,
        once: false,
        passive: true
    });
}
