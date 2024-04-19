const http = require('node:http')
const fs = require('node:fs')
const url = require('node:url')
const PORT = 8080 || 3030
const dados = './data.json'

const server = http.createServer((req, res) => {
    const { url, method } = req
    const urlInfo = require('node:url').parse(req.url, true)
    const name = urlInfo.query.name;
    const idade = urlInfo.query.idade;
    if(url==='/cadastrar'){
        fs.readFile('index.html', (err, data) => {
            res.writeHead(200, {'Content-Type':'text/html'})
            res.write(data)
            return res.end()
        })
    }else if(name && idade){
        const datas = {
            "nome":name,
            "idade":idade
        }
        fs.readFile(dados, (err, data) => {
            var json = JSON.parse(data);
            json.push(datas);    
            fs.writeFile(dados, JSON.stringify(json), function(err){
              if (err) throw err;
              console.log('The "data to append" was appended to file!');
            });
            res.setHeader('Content-Type', 'text/html')
            return res.end(`<h1>O usuario ${name} foi criado com sucesso!</h1>`)
        })
    }
}).listen(PORT, () => {
    console.log(`Servidor aberto em http://localhost:${PORT}`)
})