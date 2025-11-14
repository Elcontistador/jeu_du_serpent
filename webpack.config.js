const path = require('path'); 

module.exports = {
    mode: 'development',
    entry: ["babel-polyfill",'./src/script.js'],    
    output: {
        path: path.resolve(__dirname, 'dist'), 
        filename: 'bundle.js',
        // Assurez-vous que le serveur peut trouver les assets
        publicPath: '/', 
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        open: true, // Ouvre automatiquement le navigateur
    },
    module: {
        rules: [
            {   
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'],
                },
            },
        },
        ],
    },
};