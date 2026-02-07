"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FC, useEffect, useState } from "react";
import { HiPlus, HiTrash } from "react-icons/hi2";
import { useLiveQuery } from "dexie-react-hooks";
import { retrieveNotes, searchNotes, TNote } from "@lib/db.ts";
import SearchInput from "#/search-input.tsx";

const NoteCard: FC<{ readonly note: TNote }> = ({ note }) => {
    const router = useRouter();

    const handleClick = () => {
        router.push(`/fn/notes/${note.id}`);
    };

    const formatTime = (isoString: string) => {
        const date = new Date(isoString);
        return date.toLocaleString("zh-CN", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit"
        });
    };

    const previewText = note.text.slice(0, 100) + (note.text.length > 100 ? "..." : "");

    return (
        <article className="cursor-pointer rounded-lg bg-zinc-100 p-6 transition-all duration-200 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800" onClick={handleClick} onKeyDown={(e) => e.key === "Enter" && handleClick()} role="button" tabIndex={0}>
            <h3 className="mb-2 truncate text-xl font-bold text-zinc-900 dark:text-zinc-50">{note.name || "无标题"}</h3>
            <p className="mb-4 line-clamp-2 text-sm text-zinc-500 dark:text-zinc-400">{previewText}</p>
            <div className="flex items-center justify-between text-xs text-zinc-400">
                <span>{formatTime(note.time)}</span>
            </div>
        </article>
    );
};

const EmptyState: FC = () => {
    return (
        <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="mb-4 rounded-full bg-zinc-100 p-6 dark:bg-zinc-900">
                <svg className="h-12 w-12 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            </div>
            <h3 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-zinc-50">暂无笔记</h3>
            <p className="mb-6 text-sm text-zinc-500 dark:text-zinc-400">点击右下角按钮创建您的第一篇笔记</p>
            <Link href="/fn/new" className="inline-flex items-center gap-2 rounded-lg bg-indigo-700 px-6 py-3 text-sm font-medium text-zinc-50 transition-colors hover:bg-indigo-800 dark:bg-indigo-300 dark:text-zinc-950 dark:hover:bg-indigo-400">
                <HiPlus size="18" />
                新建笔记
            </Link>
        </div>
    );
};

const NotesList: FC = () => {
    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState("");
    const [isSearching, setIsSearching] = useState(false);

    // 使用 useLiveQuery 实现响应式数据获取
    const notes = useLiveQuery(async () => {
        if (searchQuery.trim()) {
            setIsSearching(true);
            return await searchNotes(searchQuery);
        } else {
            setIsSearching(false);
            return await retrieveNotes();
        }
    }, [searchQuery]);

    // 跳转到新建页面
    const handleCreateNote = () => {
        router.push("/fn/new");
    };

    // 跳转到回收站
    const handleOpenTrash = () => {
        router.push("/fn/trash");
    };

    // 渲染笔记卡片网格
    const renderNotes = () => {
        if (!notes) {
            return (
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="animate-pulse rounded-lg bg-zinc-100 p-6 dark:bg-zinc-900">
                            <div className="mb-4 h-6 w-3/4 rounded bg-zinc-200 dark:bg-zinc-800" />
                            <div className="mb-4 h-4 w-full rounded bg-zinc-200 dark:bg-zinc-800" />
                            <div className="h-4 w-2/3 rounded bg-zinc-200 dark:bg-zinc-800" />
                        </div>
                    ))}
                </div>
            );
        }

        if (notes.length === 0) {
            return <EmptyState />;
        }

        return (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {notes.map((note) => (
                    <NoteCard key={note.id} note={note} />
                ))}
            </div>
        );
    };

    return (
        <main className="mt-8 flow-root min-h-screen px-4 pb-24">
            <div className="mx-auto max-w-6xl">
                <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">我的笔记</h1>
                        <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">{isSearching ? `搜索结果` : `共 ${notes?.length || 0} 篇笔记`}</p>
                    </div>
                    <button onClick={handleOpenTrash} className="inline-flex items-center gap-2 rounded-lg border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800">
                        <HiTrash size="18" />
                        回收站
                    </button>
                </div>

                <div className="mb-8">
                    <SearchInput onSearch={setSearchQuery} placeholder="搜索标题或内容..." />
                </div>

                {renderNotes()}
            </div>

            {/* 悬浮新建按钮 */}
            <button onClick={handleCreateNote} className="fixed right-8 bottom-8 z-10 rounded-full bg-indigo-700 p-4 text-zinc-50 shadow-lg shadow-indigo-500/30 transition-all hover:scale-110 hover:bg-indigo-800 dark:bg-indigo-300 dark:text-zinc-950 dark:hover:bg-indigo-400" aria-label="新建笔记">
                <HiPlus size="24" />
            </button>
        </main>
    );
};

export default NotesList;
