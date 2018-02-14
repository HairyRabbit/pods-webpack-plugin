<div alert="center">
  <img src="https://raw.githubusercontent.com/HairyRabbit/media/master/Rabbit-Simple.svg?sanitize=true" alt="Logo" />
</div>

# pods-webpack-plugin

convert pods file struct, e.g.

```js
import style from '@/style/foo'
```

will convert to

```js
import style from './foo/style.css'
```

## usage

```js
const PodsWebpackPlugin = require('@rabbitcc/pods-webpack-plugin')

module.exports = {
  //...
  plugins: [
    new PodsWebpackPlugin({ /* options */ })
  ]
}
```

## interface

```js
type Options = {
  prefix: string = '@',                    // prefix flag, e.g. `import foo from '@/bar'`
  context: string = '',                    // default to use compiler.context
  warning: boolean = true,                 // print warning
  dir: Array<string | [string, string]>    // define alias, e.g. dir: ['foo', ['bar', 'css']]
}
```

The dir item shoule be a string or a tuple, if dir item was a tuple, the second element was extname.
