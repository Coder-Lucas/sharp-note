"use client";

import * as react from "react";

type TGlobalErrorProps = Readonly<{
    error: Error & {
        digest?: string;
    };
    reset: () => unknown;
}>;

const GlobalError: react.FC<TGlobalErrorProps> = ({ error, reset }) => {
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

export default GlobalError;
