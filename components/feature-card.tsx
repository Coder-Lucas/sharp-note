"use client";

import * as react from "react";

type TProps = Readonly<{
    title: string;
    description: string;
    icon: string;
}>;

const FeatureCard: react.FC<TProps> = ({ title, description, icon }) => {
    return (
        <div className="rounded-xl border-2 border-zinc-300 bg-zinc-50 p-6 transition-all duration-300 hover:scale-105 hover:shadow-lg dark:border-zinc-700 dark:bg-zinc-900">
            <div className="mb-4 text-4xl">{icon}</div>
            <h3 className="mb-2 text-2xl font-bold text-zinc-800 dark:text-zinc-200">{title}</h3>
            <p className="text-zinc-600 dark:text-zinc-400">{description}</p>
        </div>
        // AI初稿
    );
};

export default FeatureCard;
