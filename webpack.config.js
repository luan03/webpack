const webpack = require('webpack'); //to access built-in plugins
const path = require('path');

const config = {

    performance: {
        maxEntrypointSize: 400000 //file limit
    },

    stats: { //bundle information

        // Add asset Information
        assets: true,
        chunkModules: true,
        errors: true,
        moduleTrace: true,
        performance: true,
        timings: true,
        version: true,
        warnings: true
    },

    mode: 'development', // "production" | "development" | "none"
    // Chosen mode tells webpack to use its built-in optimizations accordingly.

    target: "web", // enum
    // the environment in which the bundle should run
    // changes chunk loading behavior and available modules

    entry: { // string | object | array
        app: './src/app.js',
        pageOne: './src/pageOne/index.js',
        pageTwo: './src/pageTwo/index.js',
        pageThree: './src/pageThree/index.js',
        vendors: './src/vendors.js'
    },
     // Here the application starts executing
    // and webpack starts bundling

    output: { // options related to how webpack emits results

        filename: '[name].bundle.js', // string
        // the filename template for entry chunks

        path: __dirname + '/dist' // string

         // the target directory for all output files
        // must be an absolute path (use the Node.js path module)
    },

    module: {
        // configuration regarding modules

        rules: [
             // rules for modules (configure loaders, parser options, etc.)

            { test: /\.txt$/, use: 'raw-loader' },
            { test: /\.ts$/, use: 'ts-loader' },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    }
                ]
            }
        ]
    },

    plugins: []

};

module.exports = config;