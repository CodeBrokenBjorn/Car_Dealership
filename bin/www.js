const app = require('../CarIndex');
const http = require('http');

const port = process.env.PORT || '8900';

app.set('port', port);
const server = http.createServer(app);
server.listen(port);
//checked naming issues :/ be more vigilant.