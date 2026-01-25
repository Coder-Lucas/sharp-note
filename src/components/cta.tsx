"use client";

import Link from "next/link";
import { FC } from "react";

const CTA: FC = () => {
    return (
        <ul className="flex items-center justify-center gap-4 pt-16">
            <li className="rounded-lg bg-indigo-700 shadow shadow-indigo-500/50 transition-shadow duration-200 ease-in-out hover:shadow-xl dark:bg-indigo-300">
                <Link className="inline-block rounded-lg px-8 py-4 text-lg text-zinc-50 dark:text-zinc-950" href="/fn" prefetch={true}>
                    开始写作
                </Link>
            </li>
            <li className="rounded-lg border border-zinc-300 transition-colors duration-200 ease-in-out hover:border-zinc-500 hover:bg-zinc-300 dark:border-zinc-700 dark:hover:bg-zinc-700">
                <Link className="inline-block rounded-lg px-8 py-4 text-lg" href="/docs" prefetch={true}>
                    查看文档
                </Link>
            </li>
        </ul>
    );
};

export default CTA;
