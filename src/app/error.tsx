"use client";

import { FC } from "react";

type TNextErrorProps = {
    readonly error: Error;
    readonly reset: () => unknown;
};

const NextError: FC<TNextErrorProps> = ({ error, reset }) => {
    return (
        <main>
            <h1>出现了未知错误</h1>
            <p>{error.message}</p>
            <button onClick={reset}>重试</button>
        </main>
    );
};

export default NextError;
