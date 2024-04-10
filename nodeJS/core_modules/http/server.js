const http = require('node:http')
const port = 8080 || 3333

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.writeHead(200, {'Content-Type': 'text/plan'})
        res.end('Pagina inicial')
    }else if(req.url === '/sobre'){
        res.writeHead(200, {'Content-Type': 'text/plan'})
        res.end('Pagina sobre')
    }else{
        res.writeHead(404, {'Content-Type': 'text/plan'})
        res.end('page not found')
    }
}).listen(port, () => {
    console.log(`Server aberto na porta http://localhost:${port}`)
})