module.exports = {
  plugins: {
    // postcss-pxtorem 插件的版本需要 >= 5.0.0
    'postcss-pxtorem': {
      rootValue: 37.5,
      propList: ['*'],
      // 避免对ui 库的影响
      exclude: /node_modules/
    },
  },
}