/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const port = +process.env.PORT || 3000;

/*
 * Default webpack configuration for development
 */
export default {
    devtool: 'source-map',
    entry: [
        'webpack/hot/dev-server',
        `${process.cwd()}/src/app.js`,
        `webpack-dev-server/client?http://localhost:${port}/`
    ],
    output: {
        path: `${process.cwd()}/public`,
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.json$/,
            loader: 'json'
        }, {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['es2015', 'react'],
                plugins: ['react-hot-loader/babel']
            }
        }, {
            test: /\.less/,
            loader: 'style!css!less'
        }, {
            test: /\.(png|jpg|ico)$/,
            loader: 'file-loader?name=images/[name].[ext]'
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin({
            filename: 'bundle.css',
            allChunks: false
        }),
        new HtmlWebpackPlugin({
            title: 'React with D3',
            template: `${process.cwd()}/assets/templates/index.html`
        }),
        new webpack.DefinePlugin({
            'process.env': {NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development')}
        })
    ],
    devServer: {
        contentBase: `${process.cwd()}/public`,
        colors: true,
        historyApiFallback: true,
        inline: true,
        port: 3000
    }
};
