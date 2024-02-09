module.exports = {
	extends: [
		"stylelint-config-standard",
		"stylelint-config-property-sort-order-smacss",
		"stylelint-config-prettier-scss"
	],
	plugins: ["stylelint-scss"],
	rules: {
		"at-rule-no-unknown": null,
		"annotation-no-unknown": null,
		"import-notation": null,
		"scss/at-rule-no-unknown": [
			true,
			{
				ignoreAtRules: ["tailwind", "apply", "variants", "responsive", "screen", "layer"]
			}
		],
		"color-hex-length": "long",
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
