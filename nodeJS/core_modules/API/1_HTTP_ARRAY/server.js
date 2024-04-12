import http, { get, request } from "node:http";

/**
* Rquisição
* 1. Corpo da Aplicação (request.body) (POST)
* 2. Buscas e Filtros (Search PARAMS, Query PARAMS) http://localhost:8080/users/2 (GET)
* 3. Rotas (Route PARAMS) - http://localhost:8080/users/2 (Exclui e Edita) (PUT - PATH - DELETE)
*/

const getRandID = () => {
    return (Math.random() * (999999 - 100000) + 100000).toFixed(0);
}
const PORT = 8080;

const users = [];
const server = http.createServer((req, res) => {
    const { method, url } = req

    if (method === "GET" && url === "/users") { //Busca os usuarios
        res.setHeader("Content-Type", "application/json"); //cria um Header json
        res.end(JSON.stringify(users)); //Envia as informações .json

    } else if (url.startsWith(`/users/`) && method === "GET") { //Busca um usuario
        const userId = url.split('/')[2]
        const userFound = users.find((user) => user.id == userId)

        if (userFound) {
            res.setHeader("Content-Type", "application/json")
            res.end(JSON.stringify(userFound))
        } else {
            res.writeHead(404, { "Content-Type": "application/json" })
            res.end(JSON.stringify({ message: "User not found" }))
        }
    } else if (method === "POST" && url === "/users") { //cadastrar um usuario
        let body = "";
        req.on("data", (chunk) => {
            body += chunk.toString();
        }) //Escuta
        req.on("end", () => {
            const novoUser = JSON.parse(body)
            // novoUser.id = getRandID().toString()
            novoUser.id = users.length + 1
            users.push(novoUser);
            res.writeHead(201, { "Content-Type": "application/json" })
            res.end(JSON.stringify(novoUser))
        });
    } else if (url.startsWith(`/users/`) && method === "PUT") { //Atualizar
        const userId = url.split('/')[2]

        let body = "";
        req.on("data", (chunk) => {
            body += chunk.toString();
        }) //Escuta
        req.on("end", () => {
            const updateUser = JSON.parse(body);
            const index = users.findIndex((user) => user.id == userId) //retorna o index desejado
            if (index !== -1) {
                //atualiza
                users[index] = { ...users[index], updateUser } //concatena
                res.setHeader("Content-Type", "application/json")
                res.end(JSON.stringify(users[index]))
            } else {
                //retorna erro
                res.writeHead(404, { "Content-Type": "application/json" })
                res.end(JSON.stringify({ message: "Can't update this user" }))
            }
        });
    } else if (url.startsWith(`/users/`) && method === "DELETE") { //DELETAR um usuario
        const userId = url.split('/')[2]
        const index = users.findIndex((user) => user.id == userId)
        const userFound = users.find((user) => user.id == userId)
        if (index !== -1) {
            //atualiza
            res.setHeader("Content-Type", "application/json")
            // users.splice(index, 1) //Deleta, porém deixa um espaço vazio
            // res.end(JSON.stringify("Sucesfull delete"))
            users.push(userFound) //envia uma copia do user para o final
            users.splice(index, 1) //deleta o index desejado
            users.pop() //deleta a copia criada, assim realocando os outros para não ficar um espaço vazio
            res.end(JSON.stringify("Sucesfull delete"))
        } else {
            //retorna erro
            res.writeHead(404, { "Content-Type": "application/json" })
            res.end(JSON.stringify({ message: "Can't update this user" }))
        }
    } else { //Rota não existe (not found)
        res.writeHead(404, { "Content-Type": "application/json" })
        res.end(JSON.stringify({ message: "not found" }))
    }

}).listen(PORT, () => {
    console.log(`Servidor aberto no link: http://localhost:8080/`)
})