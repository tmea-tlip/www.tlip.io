import adapter from "@sveltejs/adapter-vercel";
import preprocess from "svelte-preprocess";
/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: [
        preprocess({
            postcss: true
        })
    ],

    kit: {
        alias: {
            $components: "src/components",
            "$components/*": "src/components/*",
            $sections: "src/sections",
            "$sections/*": "src/sections/*"
        },
        adapter: adapter(),
        files: {
            assets: "static"
        }
    }
};

export default config;
