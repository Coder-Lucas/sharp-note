"use client";

import NextLink from "next/link";
import * as React from "react";

type TProps = Readonly<{
    href: string;
    children?: React.ReactNode;
    className?: string;
}>;

const Link: React.FC<TProps> = ({ href, children = <></>, className = "" }) => {
    return (
        <NextLink className={className} href={href} prefetch={true}>
            {children}
        </NextLink>
    );
};

export default Link;
