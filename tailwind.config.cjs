module.exports = {
    purge: {
        content: [
            "./src/**/*.{html,js,svelte,ts,scss}"
        ]
    },
    darkMode: "class",
    theme: {
        extend: {}
    },
    variants: {
        extend: {
            backgroundColor: ["odd", "even"]
        }
    },
    plugins: []
};
