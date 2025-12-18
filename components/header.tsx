"use client";

import * as React from "react";
import Link from "#/link.tsx";

const Header: React.FC = () => {
    return (
        <header className="fixed top-0 left-0 z-1000 flex h-16 w-full items-center justify-center border border-zinc-500 bg-linear-to-br from-indigo-200 to-indigo-400">
            <ul className="flex h-16 w-full items-center justify-evenly bg-transparent">
                <li className="flex items-center justify-center bg-transparent">
                    <Link className="flex flex-wrap items-center justify-center bg-transparent text-zinc-950" href="/">
                        首页
                    </Link>
                </li>
                <li className="flex items-center justify-center bg-transparent">
                    <Link className="flex flex-wrap items-center justify-center bg-transparent text-zinc-950" href="/settings">
                        设置
                    </Link>
                </li>
                <li className="flex items-center justify-center bg-transparent">
                    <Link className="flex flex-wrap items-center justify-center bg-transparent text-zinc-950" href="/about">
                        关于
                    </Link>
                </li>
                <li className="flex items-center justify-center bg-transparent">
                    <Link className="flex flex-wrap items-center justify-center bg-transparent text-zinc-950" href="/docs">
                        文档
                    </Link>
                </li>
            </ul>
        </header>
    );
};

export default Header;
