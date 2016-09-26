/**
 * Create Web Server
 * Created by LuckyJourney on 2016/9/26.
 * email:lucheng888@vip.qq.com
 */
var net = require("net");

var optServer = {
    port: 12570
};


var server = net.createServer(function (conn) {
    console.log('conneted');
    console.log('conn>>conn', conn);
    conn.setEncoding('utf8');
    conn.on("data", function (data) {
        console.log(data + ' from ' + conn.remoteAddress + " " + conn.remotePort + "\r\n");
        // conn.write("Repeating:" + data);

        var opt = {
            // connection: "close",
            connection: "Keep-Alive",
            contentLength: 200
        };
        var header = 'HTTP/1.1 200 OK' + " \r\n" +
            'Date:' + new Date() + "\r\n" +
            'Connection:' + opt.connection + "\r\n" +
            'Content-Type: text/html;charset=utf-8' + "\r\n" +
            // 'Content-Type: text/plain' + "\r\n" +
            'Content-Test: hello world' + "\r\n" +
            // 'Content-Length: ' + opt.contentLength
            +"";
        var body = " \r\n\r\n" +
            "<!Doctype html><html><body>" +
            "<h1>hello world!</h1>" +
            "</body>" +
            "</html>";
        var responseText = header + body;
        conn.write(responseText);
        conn.end();
    });

    conn.on("close", function () {
        console.log("clint closed connection");
    });
});
server.listen(optServer.port, function () {

});

console.log("listening on port" + optServer.port);