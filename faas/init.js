"use strict";

export default (event, context) =>
{
    try
    {
        const contentType = getHeaderIgnoreCase(event.headers, "content-type");
    } catch (error)
    {}
    try
    {
        if (event.httpMethod !== "POST")
        {
            return new Response(JSON.stringify({
                message: "服务器仅支持POST请求"
            }), {
                status: 405,
                statusText: "Method Not Allowed",
                headers: new Headers({
                    "Content-Type": "application/json"
                })
            });
        }
        return new Response(JSON.stringify({
            message: "初始化完成",
        }), {
            status: 200,
            statusText: "OK",
            headers: new Headers({
                "Content-Type": "application/json"
            })
        });
    } catch (error)
    {
        console.error("服务器内部错误 ", error.name);
        return new Response(JSON.stringify({
            message: "服务器内部错误 ".concat(error.name)
        }), {
            status: 500,
            statusText: "Internal Server Error",
            headers: new Headers({
                "Content-Type": "application/json"
            }),
        });
    }
};
