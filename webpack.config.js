const { VueLoaderPlugin } = require('vue-loader');

module.exports = {

    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            }
        ]
    },

    plugins: [
        new VueLoaderPlugin()
    ],

    externals: {
        vue: 'Vue',
    },

    output: {
        library: 'VueIpCountry',
        libraryExport: 'default',
        filename: 'vue-ip-country.js'
    },

    devServer: {
        static: 'dist',
        port: 49030
    },

    devtool: 'source-map'

}