## about

Poor man's polar to cartesian converter.

## setup

Fetch latest from GitHub:

```sh
# Add to 'package.json' dependencies
npm install thewhodidthis/poltocar
```

## usage

Try the example:

```sh
node node_modules/poltocar/example
```

Give it an angle and a radius, get an `{ x, y }` object in return.

```js
console.log(require('poltocar')())
```

## see also

- [cartopol](https://github.com/thewhodidthis/cartopol)
