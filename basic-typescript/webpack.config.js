module.exports = {
    entry: "./app/entry.ts",
    output: {
        path: "./dist/",
        filename: "bundle.js"
    },
    module: {
        loaders: [
          {
            test: /\.ts$/,
            loader: 'ts-loader'
          }
        ]
    }
};
