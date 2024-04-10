const http = require('node:http');
const port = 8080;

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plan'})
    res.write(`Hello World`)
    res.end();
}).listen(port, () =>{
    console.log(`servidor aberto no link: http://localhost:${port}`);
});