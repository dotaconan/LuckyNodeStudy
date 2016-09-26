var optServer = {
    port: 12571
};

var app = require('http').createServer(handler);
var io = require('socket.io')(app);
var fs = require('fs');

app.listen(optServer.port);

function handler (req, res) {
    fs.readFile(__dirname + '/node-study-WebSocket.html',
        function (err, data) {
            if (err) {
                res.writeHead(500);
                return res.end('Error loading node-study-WebSocket.html');
            }
            res.writeHead(200);
            res.end(data);
        });
}

io.on('connection', function (socket) {
    socket.emit('news', { hello: 'world' });
    socket.on('my other event', function (data) {
        console.log(data);
    });
});