const path = require("path")

module.exports = (storybookBaseConfig, configType, defaultConfig) => {
    defaultConfig.module.rules.push({
        test: /\.scss$/,
        loaders: ["vue-style-loader", "css-loader", "sass-loader"],
        include: path.resolve(__dirname, "../../../clients/web-client-new/src")
    })

    defaultConfig.resolve.alias['@'] = path.resolve('../../clients/web-client-new/src')

    defaultConfig.node = {
        fs: 'empty'
    }

    return defaultConfig
}
