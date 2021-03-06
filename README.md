![Code Style](./code-style.svg)
![npm (tag)](https://img.shields.io/npm/v/eslint-config-berry/latest)
# eslint-config-berry
An ESLint preset named berry! <br>
PS If you feel like it, you can add the following to your `README`:
```md
![Code Style](https://github.com/DET171/eslint-config-berry/raw/master/code-style.svg)
```

# Usage:
First, installed the required packages:
```sh
npm i -D eslint eslint-config-berry
```
## Normal CJS/ES5
Then, use the following in your `.eslintrc` file:
```json
{
  "extends": "berry"
}
```
For a looser version with less errors and more warnings:
```json
{
  "extends": "berry/loose"
}
```
*Berry loose indeed*.
## ECMA Modules
For ESM, use:
```json
{
  "extends": "berry/module"
}
```
This requires [@babel/eslint-parser](https://www.npmjs.com/package/@babel/eslint-parser) and [@babel/core](https://www.npmjs.com/package/@babel/core) to be installed for the latest ESM syntax, so go on and install it:
```sh
npm i @babel/core @babel/eslint-parser --save-dev
```
**Note:** [@babel/eslint-parser](https://www.npmjs.com/package/@babel/eslint-parser) requires [@babel/core](https://www.npmjs.com/package/@babel/core)@>=7.2.0 and a valid Babel configuration file to run. If you do not have this already set up, please see the [Babel Usage Guide](https://babeljs.io/docs/en/usage). <br>
If you're the lazy kind, here's a `.babelrc.json` to get you started:
```json
{
  "presets": [
    "@babel/env",
  ]
}

```
### NOTE:
 IT MUST BE `.babelrc.json`, and nothing else (not even `.babelrc`!).
Otherwise, it would break.

# License
MIT
