import { readable, writable } from "svelte/store";

export const BASE_URL = readable("http://localhost:8080");
export const BASE_AUTH_URL = readable("http://localhost:8080/auth");
export const SESSION = writable(null);