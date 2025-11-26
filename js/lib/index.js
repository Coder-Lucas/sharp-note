"use strict";

const getElements = async () =>
{
    return {
        tb: document.querySelector(".table-body"),
        add: document.querySelector(".add"),
        clear: document.querySelector(".clear"),
        done: document.querySelector(".done")
    };
};

export default async () =>
{
    console.info("执行index.html代码");
    const elements = await getElements();
    elements.add.addEventListener("click", () =>
    {
        console.info("add按钮被点击");
        const name = prompt("请输入任务名称：");
        if (name === null || !/^\S+$/u.test(name.trim()))
        {
            alert("任务名称格式错误，请输入非空内容。");
            return;
        }
        const startTime = prompt("请输入任务开始时间：");
        if (startTime === null)
        {
            alert("");
            return;
        }
        const endTime = prompt("请输入任务截止时间：");
        if (endTime === null)
        {
            alert("");
            return;
        }
        const matter = prompt("请输入任务事项：");
        if (matter === null)
        {
            alert("");
            return;
        }
        const nameDiv = document.createElement("div");
        const startTimeDiv = document.createElement("div");
        const endTimeDiv = document.createElement("div");
        const matterDiv = document.createElement("div");
        const statusDiv = document.createElement("div");
        nameDiv.className = "cell";
        nameDiv.textContent = name;
        startTimeDiv.className = "cell";
        startTimeDiv.textContent = startTime;
        endTimeDiv.className = "cell";
        endTimeDiv.textContent = endTime;
        matterDiv.className = "cell";
        matterDiv.textContent = matter;
        statusDiv.className = "cell done btn";
        statusDiv.textContent = "未完成";
        elements.tb.removeChild(document.querySelector(".empty"));
        elements.tb.appendChild(nameDiv);
        elements.tb.appendChild(startTimeDiv);
        elements.tb.appendChild(endTimeDiv);
        elements.tb.appendChild(matterDiv);
        elements.tb.appendChild(statusDiv);
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
    });
    elements.done.addEventListener("click", () =>
    {
        console.info("done按钮被点击");
    });
}
