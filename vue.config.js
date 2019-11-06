/**
 * @description: vue配置文件
 * @since: 2019-10-23 19:44:19
 * @Author: jawnwa22
 * @LastEditors: jawnwa22
 * @LastEditTime: 2019-11-06 22:46:28
 */

const pages = {
    index: {
        entry: 'src/pages/index/index.js',
        template: 'src/pages/index/index.html',
        filename: 'index.html'
    },
    admin: {
        entry: 'src/pages/admin/admin.js',
        template: 'src/pages/admin/admin.html',
        filename: 'admin.html'
    }
};

// 匹配入口的url
const devServer = {
    publicPath: "/music/",
    historyApiFallback: {
        rewrites: [
            { from: /^\/music\/admin/, to: '/admin.html' },
            { from: /^\/music/, to: '/index.html' }
        ]
    }
};

module.exports = {
    pages,
    devServer,
    transpileDependencies: ['vuetify']
};
