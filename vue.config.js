
    const fs = require('fs')
module.exports = {
    productionSourceMap: false,

    devServer: {
        https: {
          key: fs.readFileSync('./certs/localhost+2-key.pem'),
          cert: fs.readFileSync('./certs/localhost+2.pem'),
        },
        public: 'https://192.168.0.14:8080/'
    }

};