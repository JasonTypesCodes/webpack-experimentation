module.exports = {
    entry: {
      pollyfills: './src/app/pollyfills.ts',
      bundle: './src/app/main.ts'
    },
    output: {
        path: "./build/dist/",
        filename: "[name].js"
    },
    resolve: {
      extensions: ['', '.js', '.ts']
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
