module.exports = {
    plugins: {
        'autoprefixer': {
            browsers: ['Android >= 4.0', 'iOS >= 8']
        },
        'postcss-pxtorem': {
            rootValue: 375,
            propList: ['*'],
            exclude:/node_modules/
        },
    }
}
