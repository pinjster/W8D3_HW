const path = require('path')

module.exports = {
    mode: 'development',
    entry: './src/index.ts',
    devServer: {
        static: {
          directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 9000,
      },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                include: [path.resolve(__dirname, 'src')]
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        publicPath: 'dist',
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
}