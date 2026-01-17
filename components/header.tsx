"use client";

import NextImage from "next/image";
import * as react from "react";
import NextLink from "next/link";

type TItemProps = Readonly<{
    children?: react.ReactNode;
    href: string;
}>;

const Item: react.FC<TItemProps> = ({ children = null, href }) => {
    return (
        <li className="flex h-16 w-auto items-center justify-center">
            <NextLink className="relative flex h-16 w-auto items-center justify-center text-xl transition-colors duration-300 ease-in-out before:absolute before:top-full before:right-auto before:bottom-0 before:left-1/2 before:z-20 before:h-px before:w-0 before:-translate-x-1/2 before:bg-linear-to-br before:from-indigo-300 before:via-indigo-500 before:to-indigo-700 before:transition-all before:duration-300 before:ease-in-out hover:bg-linear-to-br hover:from-indigo-300 hover:via-indigo-500 hover:to-indigo-700 hover:bg-clip-text hover:text-transparent hover:before:w-16" href={href} prefetch={true} scroll={true}>
                {children}
            </NextLink>
        </li>
    );
};

const Header: react.FC = () => {
    return (
        <header className="fixed top-0 right-0 bottom-auto left-0 z-10 flex h-16 w-full items-center justify-center bg-zinc-50/50 backdrop-blur-xs backdrop-saturate-150 dark:bg-zinc-950/50">
            <ul className="flex h-16 w-full items-center justify-around">
                <Item href="/">
                    <NextImage alt="logo" height={48} preload={true} src="/logo.svg" width={48}></NextImage>
                </Item>
                <Item href="/func">功能</Item>
                <Item href="/settings">设置</Item>
                <Item href="/about">关于</Item>
                <Item href="/docs">文档</Item>
            </ul>
        </header>
    );
};

export default Header;
