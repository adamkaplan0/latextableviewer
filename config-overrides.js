const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = function override(config, env) {
    if (!config.plugins) {
        config.plugins = [];
    }

    config.plugins.push(
        new CopyWebpackPlugin({patterns: [{from: 'src/swiftlatexxetex.wasm', to: 'static/media'}]}),
        new CopyWebpackPlugin({patterns: [{from: 'src/swiftlatexdvipdfm.wasm', to: 'static/media'}]})
    );

    return config;
}