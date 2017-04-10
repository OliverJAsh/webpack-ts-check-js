module.exports = {
    entry: './src/main.js',
    output: {
        filename: './target/main.js'
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.(ts|js)$/,
                exclude: /(node_modules)/,
                loader: 'ts-loader',
                options: {
                    entryFileIsJs: true,
                },
            }
        ],
    },
    resolve: {
        extensions: ['.js', '.ts'],
    },
}
