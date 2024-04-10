const agatêtêpé = require("node:http");
const port = 8080

agatêtêpé.createServer((req, res) => {
    if(req.url === "/"){
        res.writeHead("200", {"Content-Type":"text/html"})
        res.write("<meta charset=utf8>")
        res.write("<h1>Home Page</h1>")
        res.write("<p>Bem vindo a página inicial</p>")
        res.end()
    }else if(req.url === "/sobre"){
        res.writeHead("200", {"Content-Type":"text/html"})
        res.write("<meta charset=utf8>")
        res.write("<h1>About Page</h1>")
        res.write("<p>Bem vindo a página sobre</p>")
        res.end()
    }else{
        res.writeHead("404", {"Content-Type":"text/html"})
        res.write("<pre>Page not found</pre>")
        res.end()
    }
}).listen(port, () => {
    console.log(`O servidor está aberto em http://localhost:${port}`)
})