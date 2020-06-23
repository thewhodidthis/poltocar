## about

Poor man's polar to cartesian converter.

## setup

Find the [latest version](https://npm.im/poltocar) on the _npm_ registry:

```sh
# Add to 'package.json' dependencies
npm install @thewhodidthis/poltocar
```

## usage

Try the example:

```sh
node node_modules/poltocar/example
```

Give it _angular_ and _radial_ coordinates, get an `{ x, y }` object literal in return.

```js
console.log(require('poltocar')())
```

## see also

- [cartopol](https://github.com/thewhodidthis/cartopol)
