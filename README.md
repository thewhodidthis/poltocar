## about

Poor man's polar to cartesian converter.

## setup

Download from the _npm_ registry:

```sh
# Add to package.json
npm install @thewhodidthis/poltocar
```

Source from an import map to use with Deno or in-browser directly:

```json
{
  "imports": {
    "poltocar": "https://cdn.jsdelivr.net/npm/poltocar@latest/main.js"
  }
}
```

## usage

Try the example:

```sh
node node_modules/poltocar/example
```

Give it _angular_ and _radial_ coordinates, get an `{ x, y }` object literal in return.

```js
import('poltocar').then(m => console.log(m.default()))
```

## see also

- [cartopol](https://github.com/thewhodidthis/cartopol)
