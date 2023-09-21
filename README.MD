<a href="https://github.com/Bashamega/compiler"><img src="https://img.shields.io/badge/GitHub-Compiler-blue?style=flat-square&logo=github"></a>
<a href="https://www.npmjs.com/package/@basha_coder/compiler"><img src="https://img.shields.io/badge/npm-Compiler-red?style=flat-square&logo=npm"></a>
## Compiler

This is an open source compiler that compiles code in the browser. It is licensed under the MIT license.
This lib compiles the following languages:
- Python 3

If you want to add a language, please follow the [Contributing guideline](https://github.com/Bashamega/compiler/blob/main/contributing.md).
### How to use?
First install the package
```shell
npm i @basha_coder/compiler
```
Then make a file and import the lib
```js
const = require("@basha_coder/compiler")
```
Then pass in the code like this:
```js
    
const code = await compile.runPython(`
print('Hello World!')
  `)
console.log(code);

```
It will out put the following
```
["Hello World"]
```
Note: If there is any problem using this you can always open an [issue](https://github.com/Bashamega/compiler/issues), and one of the contributors will help you
### Contributing

If you would like to contribute to this project, please visit the [GitHub repository](https://github.com/Bashamega/compiler) and submit a pull request. 
The project is also available on [npm](https://www.npmjs.com/package/@basha_coder/compiler).

