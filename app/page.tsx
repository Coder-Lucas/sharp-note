"use client";

import * as react from "react";
import NextLink from "next/link";
import FeatureCard from "#/feature-card.tsx";

const Index: react.FC = () => {
    return (
        <div className="min-h-screen">
            <section className="flex min-h-[70vh] flex-col items-center justify-center px-4">
                <h1 className="mb-4 bg-gradient-to-r from-indigo-400 via-indigo-600 to-indigo-800 bg-clip-text text-center text-6xl font-bold text-transparent dark:from-indigo-300 dark:via-indigo-500 dark:to-indigo-700">SharpNote</h1>
                <p className="mb-12 text-center text-2xl text-zinc-600 dark:text-zinc-400">你的Markdown专属写作空间</p>
                <div className="flex gap-4">
                    <NextLink className="rounded-lg bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-700 px-8 py-3 text-lg font-semibold text-zinc-50 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl dark:from-indigo-400 dark:via-indigo-500 dark:to-indigo-600" href="/func">
                        开始写作
                    </NextLink>
                    <NextLink className="rounded-lg border-2 border-zinc-400 px-8 py-3 text-lg font-semibold text-zinc-700 transition-all duration-300 hover:scale-105 hover:bg-zinc-100 dark:border-zinc-600 dark:text-zinc-300 dark:hover:bg-zinc-800" href="/docs">
                        查看文档
                    </NextLink>
                </div>
            </section>
            <section className="px-4 pb-16">
                <h2 className="mb-12 text-center text-4xl font-bold text-zinc-800 dark:text-zinc-200">核心特性</h2>
                <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
                    <FeatureCard title="极简设计" description="专注于写作本身，界面简洁直观，无干扰的写作体验" icon="✨" />
                    <FeatureCard title="响应迅速" description="即开即用，快速响应，捕捉每一个灵感瞬间" icon="⚡" />
                    <FeatureCard title="隐私安全" description="本地存储，所有数据全部存储于浏览器，无需云端" icon="🔒" />
                    <FeatureCard title="完全开源" description="永久免费，完全开源，开启你的写作之旅" icon="💯" />
                </div>
            </section>
        </div>
        // AI初稿
    );
};

export default Index;
