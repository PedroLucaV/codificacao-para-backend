const http = require("node:http");
const port = 8080

http.createServer((req, res) => {
    if(req.url === "/"){
        res.writeHead("200", {"Content-Type":"text/html"})
        res.write("<meta charset=utf8>")
        res.write("<h1>Null Page</h1>")
        res.end()
    }else if(req.url === "/home"){
        res.writeHead("200", {"Content-Type":"text/html"})
        res.write("<meta charset=utf8>")
        res.write("<h1>Bem-vindo à página inicial!</h1>")
        res.write("<p>Bem vindo a página sobre</p>")
        res.end()
    }else if(req.url === "/about"){
        res.writeHead("200", {"Content-Type":"text/html"})
        res.write("<meta charset=utf8>")
        res.write("<h1>Sobre nós: somos uma empresa dedicada a...</h1>")
        res.end()
    }else{
        res.writeHead("404", {"Content-Type":"text/html"})
        res.write("<pre>Page not found</pre>")
        res.end()
    }
}).listen(port, () => {
    console.log(`O servidor está aberto em http://localhost:${port}`)
})