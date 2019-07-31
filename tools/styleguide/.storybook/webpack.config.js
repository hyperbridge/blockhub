const path = require('path')

const linkMode = true

module.exports = ({ config }) => {
    config.module.rules.push({
        test: /\.scss$/,
        loaders: ['vue-style-loader', 'css-loader', 'sass-loader'],
        include: path.resolve(__dirname, '../../../clients/web')
    })

    config.module.rules.push({
        test: /\.scss$/,
        loaders: ['vue-style-loader', 'css-loader', 'sass-loader'],
        include: path.resolve(__dirname, '../node_modules/@ericmuyser/hyper-ui/src')
    })

    if (linkMode) {
        config.module.rules.push({
            test: /\.scss$/,
            loaders: ['vue-style-loader', 'css-loader', 'sass-loader'],
            include: path.resolve(__dirname, '../../../../ui/packages/hyper-ui')
        })
    }

    config.module.rules.push({
        test: /\.(ts|tsx)$/,
        use: [
        {
            loader: require.resolve('awesome-typescript-loader')
        },
        {
            loader: require.resolve('react-docgen-typescript-loader')
        }
        ]
    })

    config.resolve.extensions.push('.ts', '.tsx')

    config.resolve.alias['@'] = path.resolve(__dirname, '../../../clients/web/ui')

    config.resolve.alias['~'] = path.resolve(__dirname, '../../../clients/web/ui')

    config.node = {
        fs: 'empty'
    }

    return config
}
