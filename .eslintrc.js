module.exports = {
	env: {
		browser: true,
		es2021: true
	},
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:react/jsx-runtime",
		"eslint-config-prettier"
	],
	overrides: [],
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module"
	},
	plugins: ["react"],
	rules: {
		"no-unused-vars": "warn"
	}
}
