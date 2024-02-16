import type { Writable } from "svelte/store";
import { writable } from "svelte/store";

export const sideMenuOpen: Writable<boolean> = writable(false);
