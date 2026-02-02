"use client";

import { Dexie, Table } from "dexie";
import { v7 } from "uuid";

type TNote = {
    id: string;
    name: string;
    text: string;
};

class SharpNoteDB extends Dexie {
    notes: Table<TNote, string, TNote> = undefined!;

    static uuid() {
        return v7();
    }

    constructor() {
        super("SharpNoteDB");
        return this;
    }

    async init() {
        try {
            this.version(1).stores({
                notes: "id, name, text"
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

export default db;
