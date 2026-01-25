"use client";

import { FC } from "react";

type TCErrorProps = Readonly<{
    error: Error & {
        digest?: string;
    };
    reset: () => unknown;
}>;

const CError: FC<TCErrorProps> = ({ error, reset }) => {
    return (
        <>
            <h1>出现了未知错误</h1>
            <p>{error.message}</p>
            <button onClick={reset}>重试</button>
        </>
    );
};

export default CError;
