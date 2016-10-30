import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

let extractLESS = new ExtractTextPlugin('bundle.less');

/*
 * Default webpack configuration for production
 */
export default {
    devtool: false,
    entry:  `${process.cwd()}/src/app.js`,
    output: {
        path: `${process.cwd()}/public`,
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.json$/,
            loader: 'json'
        },{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['es2015','react']
            }
        }, {
            test: /\.less$/i,
            loader: extractLESS.extract(['css', 'less'])
        }, {                                                                                                                                                                                                                                                                test: /\.(png|jpg|ico)$/,                                                                                                                                                                                                                                       loader: 'file-loader?name=images/[name].[ext]'                                                                                                                                                                                                              }, {                                                                                                                                                                                                                                                                test: /\.html$/,                                                                                                                                                                                                                                                loader: 'file-loader?name=[name].[ext]'                                                                                                                                                                                                                     }]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({comments: false}),
        extractLESS,
        new webpack.DefinePlugin({
            'process.env': {NODE_ENV: JSON.stringify('production')}
        })
    ]
};
