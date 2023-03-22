const appConfig = require('../config');
const iconJs = require('icon-sdk-js');

const wallet = iconJs.default.IconWallet.loadKeystore(appConfig.keystore,appConfig.keystorePassword,true);

module.exports = wallet;