import PocketBase from "pocketbase";

const url = import.meta.env.VITE_POCKETBASE_URL;

export const PocketBaseClient = new PocketBase(url);
