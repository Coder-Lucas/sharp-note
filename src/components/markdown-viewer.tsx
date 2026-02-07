"use client";

import { FC } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type TMarkdownViewerProps = {
    readonly content: string;
};

const MarkdownViewer: FC<TMarkdownViewerProps> = ({ content }) => {
    return (
        <article className="prose dark:prose-invert prose-headings:text-indigo-700 dark:prose-headings:text-indigo-300 prose-a:text-indigo-700 dark:prose-a:text-indigo-300 prose-code:bg-zinc-200 dark:prose-code:bg-zinc-800 prose-code:rounded prose-code:px-1 prose-code:py-0.5 prose-pre:bg-zinc-100 dark:prose-pre:bg-zinc-900 prose-pre:rounded-lg max-w-none">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
        </article>
    );
};

export default MarkdownViewer;
