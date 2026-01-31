// "use client";
//
// import Dexie, { Table } from "dexie";
//
// type TNote = {
//     id: string;
//     name: string;
//     text: string;
// };
//
// class SharpNoteDB extends Dexie {
//     notes: Table<TNote, string, TNote> = undefined!;
//
//     static uuid() {
//         return crypto.randomUUID();
//     }
//
//     constructor() {
//         super("SharpNoteDB");
//         return this;
//     }
//
//     async init() {
//         try {
//             this.version(1).stores({
//                 notes: "id, name, text"
//             });
//             await this.open();
//         } catch (e) {
//             console.error(`ERROR: ${e}`);
//             throw e;
//         }
//         return undefined;
//     }
// }
//
// const db: SharpNoteDB = new SharpNoteDB();
// db.init().catch((e) => {
//     console.error(`ERROR: ${e}`);
//     throw e;
// });
//
// export default db;
