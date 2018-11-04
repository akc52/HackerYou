# Example 1

## Introduction to nodejs (as a runtime environment)

### Task #1
> Create a `hello.js` file taht will log out "Hello World!"

### Task #2.1
> Pass a command line arguments to a node program

### Task #2.2
> Pass an environment variables into a node program


## Modules

### Syntactical Differences

> `require` vs `import`/`from`

[Meduim post about topic](https://medium.com/computed-comparisons/commonjs-vs-amd-vs-requirejs-vs-es6-modules-2e814b114a0b) gives some good explaination though the level of jargan and history might be confusing. If you have more questions after reading this article, that's quite normal.

Syntactically the following two examples are the same.
> **RequireJS**
```js
const moduleName = rquire('module-name');
```
[Documentation](https://nodejs.org/api/modules.html) on `require` and module API in nodejs.

> **ECMAScript 6**
```js
import moduleName from 'module-name';
```
[Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) on `import` syntax.

> `module-name.js` (RequireJS)
```js
'use strict';

module.exports = {
  sum: function sum (a, b) {
    return a + b;
  },
};
```

> `module-name.js` (ECMScript 6)
```js
'use strict';

export default {
  sum: function sum (a, b) {
    return a + b;
  }
};
```

**CAVEAT**: You must run `node` with a special flag to get this import syntax (unless you're using bable).
`node --experimental-modules my-app.mjs`.

### Class Exercise
> Creating a _simple_ module

_(notes: exercise #1)_

### Class Exercise
> Create your **own** module

_(notes: exercise #2 & #2.1)_
