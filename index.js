const http = require('http')
const app = require('./src/app')
const port = process.env.PORT || 4400;
const server = http.createServer(app);

server.listen(port);
console.log("\nStart app on port: ",port)