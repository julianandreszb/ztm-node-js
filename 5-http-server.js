const http = require('http');

const PORT = 3000;
const server = http.createServer((req, res) => {
    if (req.url === '/friends') {
        // res.writeHead(200, {
        //     'Content-Type': 'application/json',
        // });
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({
            name: 'Julian Zapata'
        }));
    } else if (req.url === '/messages') {
        // res.writeHead(200, {
        //     'Content-Type': '',
        // });
        // res.statusCode = 200; Default is 200
        res.setHeader('Content-Type', 'text/html')
        res.write('<html lang="en">');
        res.write('<body>');
        res.write('<h1>Message List!</h1>');
        res.write('</body>');
        res.write('</html>');
        res.end();
    } else {
        res.statusCode = 404;
        res.end();
    }
});

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
}); // 127.0.0.1 => localhost