module.exports = {
    entry: {
        'demoPage': './src/demo-webpack.jsx'
    },

    output: {
        library: '[name]',
        filename: '[name].js'
    },

    module: {
        loaders: [
        { test: /\.jsx$/, loader: 'jsx-loader' }
        ]
    },

    externals: {
        // require("jquery") is external and available
        //  on the global var jQuery
        'react': 'React'
    }
};
