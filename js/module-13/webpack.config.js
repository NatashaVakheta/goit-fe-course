module.exports = {
    context: __dirname,
    devtool: "source-map",
    entry: "./js/index.js",
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
    module: {
      rules: [
        { test: /\.handlebars$/, loader: "handlebars-loader" }
      ]
    },
    resolve: {
        alias: {
            'handlebars' : 'handlebars/dist/handlebars.js'
        }
    },
    "target": "node"
};
