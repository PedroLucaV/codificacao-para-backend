const http = require('http')
const port = 8080

const server = http.createServer((req, res) => {
    const urlInfo = require('url').parse(req.url, true)
    const name = urlInfo.query.name
    res.statusCode = 200;
    res.setHeader('Content-Type', "text/html")
    res.write("<meta charset=utf8>")
    if (!name) {
        res.end('<h1>Preencha seu nome: <form method="GET"><input type="text" name="name"/> <input type="submit" value="Enviar"/></form></h1>')
    }else{
        res.end(`<h1>Sejá bem vindo ${name}</h1>`)
    }
}).listen(port, () => {
    console.log(`Servidor aberto no endereço http://localhost:${port}`)
})