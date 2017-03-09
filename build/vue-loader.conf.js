var utils = require('./utils');
var config = require('../config');
var isProduction = process.env.NODE_ENV === 'production';

const cssLoaders = utils.cssLoaders({
  sourceMap: isProduction ?
    config.build.productionSourceMap :
    config.dev.cssSourceMap,
  extract: isProduction
});

module.exports = {
  loaders: cssLoaders
};
