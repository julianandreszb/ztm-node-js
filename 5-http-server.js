const http = require('http');

const PORT = 3000;

const server = http.createServer();

const friends = [
    {
        id: 1,
        name: "Julian Zapata"
    },
    {
        id: 2,
        name: "Hellen"
    },
    {
        id: 3,
        name: "ian"
    },
];

server.on('request', (req, res) => {
    const items = req.url.split('/');
    if (req.method === 'POST' && items[1] === 'friends') {
        req.on('data', (data) => {
            console.log(data);
            const friend = JSON.parse(data.toString());
            console.log(`Request:`, friend);
            friends.push(friend);
        });
        req.pipe(res);

    } else if (req.method === 'GET' && items[1] === 'friends') {
        // res.writeHead(200, {
        //     'Content-Type': 'application/json',
        // });
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        if(items.length === 3){
            res.end(JSON.stringify(friends[items[2]]));
        } else {
            res.end(JSON.stringify(friends));
        }
    } else if (req.method === 'GET' && items[1] === 'messages') {
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