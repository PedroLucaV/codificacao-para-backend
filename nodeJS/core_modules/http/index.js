const http = require('node:http');
const port = 8080

const server = http.createServer((req, res) => {
    res.write('Hello World')
    res.end()
});

server.listen(port, () =>{
    console.log(`servidor aberto no link: http://localhost:${port}`);
})