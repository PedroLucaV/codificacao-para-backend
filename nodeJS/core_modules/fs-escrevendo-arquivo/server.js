const fs = require('node:fs')
const http = require('node:http')
const PORT = 8080 || 3030

const server = http.createServer((req, res) => {
    const urlInfo = require('node:url').parse(req.url, true)
    const name = urlInfo.query.name;
    if(name === undefined){
        fs.readFile('index.html', (err, data) => {
            res.writeHead(200, {'Content-Type':'text/html'})
            res.write(data)
            return res.end()
        })
    }else{
        const nameNewLine = name + ',\r\n'
        fs.appendFile('arquivo.txt', nameNewLine, (err) => {
            res.writeHead(302, {
                Location: '/'
            })
        })
        return res.end()
    }
}).listen(PORT, () => {
    console.log(`Servidor open in http://localhost:${PORT}`)
})