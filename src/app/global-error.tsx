"use client";

import { FC } from "react";

type TCGlobalErrorProps = Readonly<{
    error: Error & {
        digest?: string;
    };
    reset: () => unknown;
}>;

const CGlobalError: FC<TCGlobalErrorProps> = ({ error, reset }) => {
    return (
        <html>
            <body>
                <main>
                    <h1>出现了未知错误</h1>
                    <p>{error.message}</p>
                    <button onClick={reset}>重试</button>
                </main>
            </body>
        </html>
    );
};

export default CGlobalError;
