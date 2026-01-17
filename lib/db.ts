import Dexie, * as dexie from "dexie";

type TNote = {
    name: string;
    text: string;
};

class NoteDB extends Dexie {
    notes: dexie.Table<TNote, string, TNote> = undefined!;

    constructor() {
        super("notes");
        this.version(1).stores({
            notes: "name, text"
        });
        this.open().catch((e) => {
            console.error(`ERROR: ${e}`);
        });
    }
}

const db: NoteDB = new NoteDB();
console.info("INFO: 数据库创建完成");

const createNote: ({ name, text }: TNote) => Promise<undefined> = async ({ name, text }) => {
    try {
        name = `${name.trim()}.md`;
        await db.notes.add({
            name,
            text
        });
        console.info("INFO: Note添加成功");
    } catch (e) {
        console.error(`ERROR: ${e}`);
    }
    return undefined;
};

const retrieveNote: () => Promise<undefined> = async () => {
    return undefined;
};

const updateNote: () => Promise<undefined> = async () => {
    return undefined;
};

const deleteNote: () => Promise<undefined> = async () => {
    return undefined;
};

export { createNote };
export { retrieveNote };
export { updateNote };
export { deleteNote };
