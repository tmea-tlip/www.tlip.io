import { sveltekit } from "@sveltejs/kit/vite";
import { plugin as mdPlugin, Mode } from "vite-plugin-markdown";

/** @type {import('vite').UserConfig} */
const config = {
    plugins: [sveltekit(), mdPlugin({ mode: Mode.HTML })]
};

export default config;
