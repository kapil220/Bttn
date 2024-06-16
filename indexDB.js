import { openDB } from "idb";

const DB_NAME = "fileStore";
const DB_VERSION = 1;
const STORE_NAME = "files";

export const initDB = async () => {
  const db = await openDB(DB_NAME, DB_VERSION, {
    upgrade(db) {
      db.createObjectStore(STORE_NAME, { keyPath: "id", autoIncrement: true });
    },
  });
  return db;
};

export const saveFile = async (file) => {
  const db = await initDB();
  await db.put(STORE_NAME, { name: file.name, file });
};

export const getFiles = async () => {
  const db = await initDB();
  return await db.getAll(STORE_NAME);
};

export const deleteFile = async (id) => {
  const db = await initDB();
  await db.delete(STORE_NAME, id);
};
