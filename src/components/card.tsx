"use client";

import { FC, ReactNode } from "react";

type TCardProps = {
    readonly children?: ReactNode;
    readonly icon?: ReactNode;
    readonly title?: string;
};

const Card: FC<TCardProps> = ({ children = null, icon = null, title = null }) => {
    return (
        <article className="rounded-lg bg-zinc-100 p-4 transition-transform duration-200 ease-in-out hover:translate-x-1 hover:translate-y-1 dark:bg-zinc-900">
            {icon}
            <h3 className="pt-4 text-lg font-bold">{title}</h3>
            <p>{children}</p>
        </article>
    );
};

export default Card;
