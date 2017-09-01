import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextWebpackPlugin from 'extract-text-webpack-plugin';

const config = {
    devtool: process.env.NODE_ENV === 'development' ? 'inline-source-map' : 'source-map',
    entry: {
        bundle: './src/index.js',
        vendor: [
            'axios',
            'prop-types',
            'react',
            'react-dom',
            'react-redux',
            'react-router-dom',
            'redux',
            'redux-form',
            'react-loadable',
            'redux-thunk',
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '',
        filename: process.env.NODE_ENV === 'development' ? '[name].js' : '[name].[chunkhash].js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['babel-loader'],
            },
            {
                test: /\.(woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'manifest']
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),
    ],
    resolve: {
        extensions: ['.js', '.jsx']
    }
};


if (process.env.NODE_ENV === 'development') {
    config.devServer = {
        historyApiFallback: true,
        contentBase: './dist',
        port: 8080
    };

    config.module.rules.push({
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
    });

    config.plugins.push(
        new webpack.NamedModulesPlugin()
    )
}
else {
    config.plugins.push(
        new ExtractTextWebpackPlugin({
            filename: '[name].css'
        })
    );

    config.module.rules.push({
        test: /\.css$/,
        loader: ExtractTextWebpackPlugin.extract('css-loader')
    });
}

export default config;