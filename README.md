# webpack

dive into webpack, a static module bundle that build a dependency graph and generates a bundle.


## Modules

Modular Programming - In order to facilitate the development by decomposition into smaller pieces.

Each module has a smaller surface area than a full program making verification, debugging, and testing.
Well-written modules provide solid abstractions and encapsulation boundaries. So, each module has a coherent design and clear purpose within the overall application.


Webpack applies the concept of modules to any file in your project.


## webpack modules

webpack modules can express their dependencies in a variety of ways, like:

- An ES2015 import statement
- A CommonJS require() statement
- An AMD define and require statement
- An @import statement inside of a css/sass/less file.
- An image url in a stylesheet (url(...)) or html (<img src=...>) file.


## supported Module types

webpack uses loaders to process no-Javascript modules into your bundles, like:

- CoffeeScript
- TypeScript
- ESNext (Babel)
- Sass
- Less
- Stylus


## core concepts

- Entry
- Output
- Loaders
- Plugins


### Entry

Entry point indicates which module wepack should use to begin building out, webpack
will figure out which other modules and libraries that entry libraries that entry point
depends on.

These entry points will be configured in <b>webpack.config.js</b>. For example:

````
module.exports = {
  entry: './path/to/my/entry/file.js'
};

````

#### Entry points

- Single Entry

`````
const config = {
  entry: './path/to/my/entry/file.js'
};

module.exports = config;
`````

<small>Shorthand</small>

`````
const config = {
  entry: {
    main: './path/to/my/entry/file.js'
  }
};
`````

- Object Syntax

``````
const config = {
  entry: {
    app: './src/app.js',
    vendors: './src/vendors.js'
  }
};
``````



### Output

The output property tells webpack where to emit the bundles It creates and how to name these files,
It defaults to `./dist/bundle.js` for the main output file and the `./dist` folder for any other
generated file.

````
const path = require('path');

module.exports = {
  entry: './path/to/my/entry/file.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-first-webpack.bundle.js'
  }
};
````

<small>It is possible to configure output using CDN and hashes</small>

There are a bunch of options that you can configure on your output bundle.

### Loaders

Loaders allow webpack to process other types of files and converting them into valid modules
that can be consumed by your application and added to the dependency graph.

To use loaders, the first step is to install them.

``````
npm install --save-dev css-loader
npm install --save-dev ts-loader
``````


Loaders have two purposes in your webpack configuration

- `test` property identifies which file or files should be transformed
- `use` property indicates which loader should be used to do the transforming

`````
const path = require('path');

const config = {
  output: {
    filename: 'my-first-webpack.bundle.js'
  },
  module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' }
    ]
  }
};

module.exports = config;
`````

This tells the webpack's compiler the following  resolves to a '.txt' file inside of a require()/import statement, use the raw-loader to transform it before you add it to the bundle."

<small>It is important to remember that when defining rules in your webpack.config you are defining them under module.rules and not rules.</small>

### Plugins

While loaders are used to transform certain types of modules, plugins can be leveraged to perform a wider range of tasks, from bundle optimisation, assets management or inject environment variables.

Plugins are customizable through options.

`````
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins

const config = {
  module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: './src/index.html'})
  ]
};

module.exports = config;
`````

In the example above, the `html-webpack-plugin generates` an html file for your application injecting automatically all your generated bundles.

Also, we can configure optimization plugins like CommonsChunkPlugin.


### Mode

Mode parameter, you can enable webpack's built-in optimizations that correspond to each environment.
default is `production`

``````
module.exports = {
  mode: 'production'
};
``````

### Target

You can set the `target` property to define in which environment you want to compile.

```````
module.exports = {
  target: 'node'
};
```````

<b>Multiple Targets</b>

``````
var path = require('path');
var serverConfig = {
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'lib.node.js'
  }
  //…
};

var clientConfig = {
  target: 'web', // <=== can be omitted as default is 'web'
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'lib.js'
  }
  //…
};

module.exports = [ serverConfig, clientConfig ];
``````


### Configuration languages available

- typescript
- coffeescript
- Babel and JSX


Additionally, you can export multiple configurations


### Resolve

Modules resolution path, can be configured to be more readable.

``````
alias: {
  Utilities: path.resolve(__dirname, 'src/utilities/'),
  Templates: path.resolve(__dirname, 'src/templates/')
}
``````

``````
import Utility from 'Utilities/utility';
``````
