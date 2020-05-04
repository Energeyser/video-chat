//const http = require('http');
const https = require('https');
const redis = require('socket.io-redis');
var fs = require('fs');

const app = require('./app')
const config = require('./config')
var privateKey  = fs.readFileSync('./certs/localhost+2-key.pem', 'utf8');
var certificate = fs.readFileSync('./certs/localhost+2.pem', 'utf8');

var credentials = {key: privateKey, cert: certificate};

// Server
//const server = http.createServer(app);
const httpsServer = https.createServer(credentials, app);

// Atach server to the socket
app.io.attach(httpsServer)

// Origin socket configuration
app.io.origins([config.ORIGINS])

// Using the adapter to pass event between nodes
app.io.adapter(redis({ 
    host: config.REDIS_HOST, 
    port: config.REDIS_PORT 
}));

// server.listen(config.PORT, () => {
//     console.log(`Server Listening on port ${config.PORT}`)
// });

httpsServer.listen(config.PORT, () => {
    console.log(`Server Listening on port ${config.PORT}`)
});

