const fs = require('node:fs')
const http = require('node:http')
const PORT = 8080 || 3030

const server = http.createServer((req, res) => {
    fs.readFile('index.html', (err, data) =>{
        if(err){
            throw new Error('Erro ao ler o arquivo')
        }
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write(data)
    })
}).listen(PORT, () => {
    console.log("SERVER OPEN")
})