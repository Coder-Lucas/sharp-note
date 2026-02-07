"use client";

import Dexie, { Table } from "dexie";
import { v7 } from "uuid";

type TNote = {
    readonly id: string;
    readonly name: string;
    readonly text: string;
    readonly time: string;
    readonly deletedAt: string | null;
};

const TRASH_RETENTION_DAYS = 30;

class SharpNoteDB extends Dexie {
    notes: Table<TNote, string, TNote> = undefined!;

    static uuid() {
        return v7();
    }

    constructor() {
        super(SharpNoteDB.name);
        return this;
    }

    async init() {
        try {
            this.version(1).stores({
                notes: "id, name, text, time, deletedAt"
            });
            await this.open();
        } catch (e) {
            console.error(`ERROR: ${e}`);
            throw e;
        }
        return undefined;
    }
}

const db: SharpNoteDB = new SharpNoteDB();
db.init().then();

const createTimestamp = () => new Date().toISOString();

const createNote = async ({ name, text }: Pick<TNote, "name" | "text">): Promise<TNote | undefined> => {
    try {
        const note: TNote = {
            id: SharpNoteDB.uuid(),
            name,
            text,
            time: createTimestamp(),
            deletedAt: null
        };
        await db.notes.add(note);
        console.info("INFO: Note创建成功");
        return note;
    } catch (e) {
        console.error(`ERROR: ${e}`);
        throw e;
    }
};

const retrieveNote = async (id: string): Promise<TNote | undefined> => {
    try {
        const note = await db.notes.get(id);
        if (note) {
            console.info("INFO: Note获取成功");
        }
        return note;
    } catch (e) {
        console.error(`ERROR: ${e}`);
        throw e;
    }
};

const retrieveNotes = async (): Promise<TNote[]> => {
    try {
        const notes = await db.notes.filter((note) => note.deletedAt === null).sortBy("time");
        const reversed = notes.reverse();
        console.info("INFO: Notes列表获取成功");
        return reversed;
    } catch (e) {
        console.error(`ERROR: ${e}`);
        throw e;
    }
};

const retrieveDeletedNotes = async (): Promise<TNote[]> => {
    try {
        const notes = await db.notes.filter((note) => note.deletedAt !== null).sortBy("deletedAt");
        const reversed = notes.reverse();
        console.info("INFO: DeletedNotes列表获取成功");
        return reversed;
    } catch (e) {
        console.error(`ERROR: ${e}`);
        throw e;
    }
};

const updateNote = async (id: string, { name, text }: Partial<Pick<TNote, "name" | "text">>): Promise<undefined> => {
    try {
        const note = await db.notes.get(id);
        if (!note) {
            console.error("ERROR: Note不存在");
            return undefined;
        }
        const updated: TNote = {
            ...note,
            name: name ?? note.name,
            text: text ?? note.text,
            time: createTimestamp()
        };
        await db.notes.put(updated);
        console.info("INFO: Note更新成功");
        return undefined;
    } catch (e) {
        console.error(`ERROR: ${e}`);
        throw e;
    }
};

const softDeleteNote = async (id: string): Promise<undefined> => {
    try {
        const note = await db.notes.get(id);
        if (!note) {
            console.error("ERROR: Note不存在");
            return undefined;
        }
        const updated: TNote = {
            ...note,
            deletedAt: createTimestamp()
        };
        await db.notes.put(updated);
        console.info("INFO: Note已移至回收站");
        return undefined;
    } catch (e) {
        console.error(`ERROR: ${e}`);
        throw e;
    }
};

const restoreNote = async (id: string): Promise<undefined> => {
    try {
        const note = await db.notes.get(id);
        if (!note) {
            console.error("ERROR: Note不存在");
            return undefined;
        }
        const updated: TNote = {
            ...note,
            deletedAt: null
        };
        await db.notes.put(updated);
        console.info("INFO: Note已恢复");
        return undefined;
    } catch (e) {
        console.error(`ERROR: ${e}`);
        throw e;
    }
};

const permanentlyDeleteNote = async (id: string): Promise<undefined> => {
    try {
        await db.notes.delete(id);
        console.info("INFO: Note已彻底删除");
        return undefined;
    } catch (e) {
        console.error(`ERROR: ${e}`);
        throw e;
    }
};

const cleanExpiredNotes = async (): Promise<number> => {
    try {
        const cutoffDate = new Date();
        cutoffDate.setDate(cutoffDate.getDate() - TRASH_RETENTION_DAYS);
        const cutoff = cutoffDate.toISOString();

        const expiredNotes = await db.notes.filter((note) => note.deletedAt !== null && note.deletedAt < cutoff).toArray();

        for (const note of expiredNotes) {
            await db.notes.delete(note.id);
        }

        const count = expiredNotes.length;
        if (count > 0) {
            console.info(`INFO: 已清理 ${count} 条过期笔记`);
        }
        return count;
    } catch (e) {
        console.error(`ERROR: ${e}`);
        throw e;
    }
};

const searchNotes = async (query: string): Promise<TNote[]> => {
    try {
        const allNotes = await db.notes.filter((note) => note.deletedAt === null).toArray();

        const lowerQuery = query.toLowerCase();
        const filtered = allNotes.filter((note) => note.name.toLowerCase().includes(lowerQuery) || note.text.toLowerCase().includes(lowerQuery));

        const sorted = filtered.sort((a, b) => new Date(b.time).getTime() - new Date(a.time).getTime());

        return sorted;
    } catch (e) {
        console.error(`ERROR: ${e}`);
        throw e;
    }
};

cleanExpiredNotes();

export { createNote, retrieveNote, retrieveNotes, retrieveDeletedNotes, updateNote, softDeleteNote, restoreNote, permanentlyDeleteNote, searchNotes, cleanExpiredNotes };
export { SharpNoteDB };
export type { TNote };
export default db;
