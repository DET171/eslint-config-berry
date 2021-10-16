module.exports = {
	"extends": "eslint:recommended",
	"parser": "@babel/eslint-parser",
	"env": {
		"node": true,
		"es6": true,
		"browser": true
	},
	"parserOptions": {
		"ecmaVersion": 2021,
    "sourceType": "module",
		"babelOptions": {
			"configFile": "./.babelrc.json"
		}
	},
	"rules": {
		"brace-style": ["error", "stroustrup", { "allowSingleLine": true }],
		"comma-dangle": ["error", "always-multiline"],
		"comma-spacing": "error",
		"comma-style": "error",
		"curly": ["error", "multi-line", "consistent"],
		"dot-location": ["error", "property"],
		"handle-callback-err": "off",
		"indent": ["error", "tab"],
		"max-nested-callbacks": ["error", { "max": 4 }],
		"max-statements-per-line": ["error", { "max": 20 }],
		"no-console": "off",
		"no-empty-function": "error",
		"no-floating-decimal": "error",
    "no-inline-comments": "warn",
		"no-fallthrough": "warn",
		"no-constant-condition": "warn",
		"no-inline-comments": "error",
		"no-lonely-if": "error",
		"no-multi-spaces": "error",
		"no-multiple-empty-lines": ["error", { "max": 2, "maxEOF": 1, "maxBOF": 0 }],
		"no-shadow": ["warn", { "allow": ["err", "resolve", "reject"] }],
		"no-trailing-spaces": ["error"],
		"object-curly-spacing": ["error", "always"],
		"prefer-const": "warn",
		"quotes": ["error", "single"],
		"semi": ["error", "always"],
		"space-before-blocks": "error",
		"no-unused-vars": "warn",
		"space-before-function-paren": ["error", {
			"anonymous": "never",
			"named": "never",
			"asyncArrow": "always"
		}],
		"space-in-parens": "error",
		"space-infix-ops": "error",
		"space-unary-ops": "error",
		"spaced-comment": "error",
		"no-inline-comments": "off",
		"yoda": "error"
	}
}
