
const path = require('path')
module.exports = {
    lintOnSave: false,
    devServer: {
        disableHostCheck: true,
        // allowedHosts: [ 'www.deliver.com' ], // 二者其一
    },
    configureWebpack: {
        
        resolve: {
            alias: {
                '@': path.join(__dirname, 'src')
            }
        }
    },
}