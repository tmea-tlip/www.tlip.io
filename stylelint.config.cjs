module.exports = {
    extends: ["stylelint-config-standard", "stylelint-config-property-sort-order-smacss"],
    plugins: ["stylelint-scss"],
    rules: {
        "at-rule-no-unknown": null,
        "scss/at-rule-no-unknown": [
            true,
            {
                ignoreAtRules: ["tailwind", "apply", "variants", "responsive", "screen", "layer"]
            }
        ],
        "color-hex-length": "long",
        indentation: null,
        "at-rule-name-case": "lower",
        "at-rule-name-space-after": "always-single-line",
        "at-rule-semicolon-newline-after": "always",
        "declaration-colon-newline-after": null,
        "value-list-comma-newline-after": null,
        "property-no-unknown": [
            true,
            {
                ignoreProperties: ["font-named-instance"]
            }
        ],
        "selector-pseudo-class-no-unknown": [
            true,
            {
                ignorePseudoClasses: ["global"]
            }
        ]
    }
};
