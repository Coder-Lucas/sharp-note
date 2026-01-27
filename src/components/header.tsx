"use client";

import Image from "next/image";
import Link from "next/link";
import { ReactNode, FC } from "react";

type TItemProps = Readonly<{
    children?: ReactNode;
    href: string;
}>;

const Item: FC<TItemProps> = ({ children = null, href }) => {
    return (
        <li className="h-16 w-auto">
            <Link className="relative flex h-16 w-auto items-center justify-center text-xl transition-colors duration-200 ease-in-out before:absolute before:top-full before:right-auto before:bottom-0 before:left-1/2 before:z-20 before:h-px before:w-0 before:-translate-x-1/2 before:bg-indigo-700 before:transition-all before:duration-200 before:ease-in-out hover:text-indigo-700 hover:before:w-16 dark:before:bg-indigo-300 dark:hover:text-indigo-300" href={href} prefetch={true}>
                {children}
            </Link>
        </li>
    );
};

const Header: FC = () => {
    return (
        <header className="fixed top-0 right-0 bottom-auto left-0 z-10 h-16 w-full bg-zinc-50/50 backdrop-blur-xs backdrop-saturate-150 dark:bg-zinc-950/50">
            <ul className="flex h-16 w-full items-center justify-around">
                <Item href="/">
                    <Image alt="favicon" height={48} preload={true} src="/favicon.svg" width={48} />
                </Item>
                <Item href="/fn">功能</Item>
                <Item href="/settings">设置</Item>
                <Item href="/about">关于</Item>
                <Item href="/docs">文档</Item>
            </ul>
        </header>
    );
};

export default Header;
