module.exports = {
    purge: {
        content: [
            "./src/**/*.{html,js,svelte,ts,scss}"
        ]
    },
    darkMode: "class",
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: '1.5rem',
                md: '4.5rem',
                xl: '7rem',
                '2xl': '7rem',
            },
        },
        extend: {}
    },
    variants: {
        extend: {
            backgroundColor: ["odd", "even"]
        }
    },
    plugins: []
};
