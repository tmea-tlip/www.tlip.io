import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-static";

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: [
        preprocess({
            postcss: true
        })
    ],

    kit: {
        target: "#svelte",
        ssr: false,
        adapter: adapter({
            pages: "dist",
            assets: "dist",
            fallback: "index.html"
        })
    }
};

export default config;
