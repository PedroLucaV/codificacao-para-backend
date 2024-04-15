import http, { get, request } from "node:http";

const PORT = 8080
const participantes = [{
    "nome": "Pedro Lucas",
    "email": "pedro@gmail.com",
    "senha": "123",
    "confirmarSenha": "123",
    "cidade": "Maceió",
    "idade": "18",
    "id": 1
},
{
    "nome": "Pedro Lucas",
    "email": "pedro@gmail.com",
    "senha": "123",
    "confirmarSenha": "123",
    "cidade": "Maceió",
    "idade": "17",
    "id": 1
}, {
    "nome": "Pedro Lucas",
    "email": "pedro@gmail.com",
    "senha": "123",
    "confirmarSenha": "123",
    "cidade": "Recife",
    "idade": "17",
    "id": 1
}, 
{
    "nome": "Pedro Lucas",
    "email": "pedro@gmail.com",
    "senha": "123",
    "confirmarSenha": "123",
    "cidade": "Recife",
    "idade": "17",
    "id": 1
}];

const mostFrequent = (arr, map = (x) => x) => { //usa o map já predefinido na função
    return Object.entries(
        arr.reduce((acc, atual) => {
            const k = map(atual); //cria um array mapeado com o valor atual do objeto e atribui a variavel K
            acc[k] = (acc[k] ?? 0) + 1; //O operador de coalescência nula (??) retorna os resultados da expressão de seu lado direito se a expressão de seu lado esquerdo for null ou undefined.
            return acc; //retorna o acressimo
        }, {})
    ).reduce((acc, atual) => (atual[1] >= acc[1] ? atual : acc), [null, 0])[0];
}

const server = http.createServer((req, res) => {
    const { method, url } = req
    if (method === "GET" && url === "/participants") { //Mostra os participantes
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(participantes));
    } else if (method === "POST" && url === "/participants") { //cadastrar participantes
        let body = "";
        req.on("data", (chunk) => {
            body += chunk.toString();
        })
        req.on("end", () => {
            if (body.includes("nome") === false) {
                res.end(`Você precisa incluir seu nome!`)
            } else if (body.includes("email") === false) {
                res.end(`Você precisa incluir seu email!`)
            } else if (body.includes("senha") === false) {
                res.end(`Você precisa incluir sua senha`)
            } else if (body.includes("cidade") === false) {
                res.end(`Você precisa incluir sua cidade!`)
            } else if (body.includes("idade") === false) {
                res.end(`Você precisa incluir sua idade`)
            } else if (body.includes("confirmarSenha") === false) {
                res.end(`Você precisa incluir sua confirmação de senha`)
            } else {
                const bodyValidate = JSON.parse(body)
                if (bodyValidate.idade <= 16) {
                    res.end('Você precisa ser maior de 16 anos para participar!')
                } else if (bodyValidate.senha !== bodyValidate.confirmarSenha) {
                    res.end('Sua senha não condiz')
                } else {
                    const novoUser = JSON.parse(body)
                    novoUser.id = participantes.length + 1
                    participantes.push(novoUser);
                    res.writeHead(201, { "Content-Type": "application/json" })
                    res.end(JSON.stringify(novoUser))
                }
            }
        });
    } else if (url.startsWith(`/participants/`) && method === "GET") {
        let idPart = url.split('/')[2]
        if (!isNaN(idPart)) {
            const partFound = participantes.find((user) => user.id == idPart)
            if (partFound) {
                res.setHeader("Content-Type", "application/json")
                res.end(JSON.stringify(partFound))
            } else {
                res.writeHead(404, { "Content-Type": "application/json" })
                res.end(JSON.stringify({ message: "User not found" }))
            }
        } else {
            if (idPart === "count") {
                const numPart = participantes.length
                console.log(numPart)
                res.setHeader("Content-Type", "application/json");
                res.end(JSON.stringify(numPart));
            } else if (idPart === "city") {
                idPart = url.split('/')[3]
                if (idPart === "most") {
                    res.setHeader("Content-Type", "application/json")
                    res.end(JSON.stringify("N"))
                }
            }
        }
    } else if (method === "GET" && url === "/participantes/count/over18") {
        const maiorIdade = participantes.filter((participantes) => participantes.idade >= 18);
        res.setHeader("Content-Type", "application/json")
        res.end(JSON.stringify(maiorIdade.length))
    } else if (method === "GET" && url === "/participantes/city/most") {
        const cidadeComMais = mostFrequent(participantes, (participante) => participante.cidade)
            res.setHeader("Content-Type", "application/json")
            res.end(JSON.stringify(cidadeComMais))
    } else if (url.startsWith(`/participants/`) && method === "DELETE") { //DELETAR um usuario
        const idPart = url.split('/')[2]
        const index = participantes.findIndex((participantes) => participantes.id == idPart)
        const partFound = participantes.find((participantes) => participantes.id == idPart)
        if (index !== -1) {
            res.setHeader("Content-Type", "application/json")
            participantes.push(partFound) //envia uma copia do user para o final
            participantes.splice(index, 1) //deleta o index desejado
            participantes.pop() //deleta a copia criada, assim realocando os outros para não ficar um espaço vazio
            res.end(JSON.stringify("Sucesfull delete"))
        } else {
            //retorna erro caso não exista esse index
            res.writeHead(404, { "Content-Type": "application/json" })
            res.end(JSON.stringify({ message: "Can't update this user" }))
        }
    } else if (url.startsWith(`/participants/`) && method === "PUT") { //Atualizar
        const userId = url.split('/')[2]
        let body = "";
        req.on("data", (chunk) => {
            body += chunk.toString();
        }) //Escuta
        req.on("end", () => {
            if (body.includes("nome") === false) {
                res.end(`Você precisa incluir seu nome!`)
            } else if (body.includes("email") === false) {
                res.end(`Você precisa incluir seu email!`)
            } else if (body.includes("senha") === false) {
                res.end(`Você precisa incluir sua senha`)
            } else if (body.includes("cidade") === false) {
                res.end(`Você precisa incluir sua cidade!`)
            } else if (body.includes("idade") === false) {
                res.end(`Você precisa incluir sua idade`)
            } else if (body.includes("confirmarSenha") === false) {
                res.end(`Você precisa incluir sua confirmação de senha`)
            } else {
                const bodyValidate = JSON.parse(body)
                if (bodyValidate.idade <= 16) {
                    res.end('Você precisa ser maior de 16 anos para participar!')
                } else if (bodyValidate.senha !== bodyValidate.confirmarSenha) {
                    res.end('Sua senha não condiz')
                } else {
                    const updateParti = JSON.parse(body);
                    let index = participantes.findIndex((participantes) => participantes.id == userId) //retorna o index desejado
                    if (index !== -1) {
                        //atualiza
                        participantes[index] = updateParti
                        participantes[index].id = index += 1
                        res.setHeader("Content-Type", "application/json")
                        res.end(JSON.stringify("Usuario editado!"))
                    } else {
                        //retorna erro
                        res.writeHead(404, { "Content-Type": "application/json" })
                        res.end(JSON.stringify({ message: "Can't update this user" }))
                    }
                }
            }
        });
    } else {  //Rota não existe (not found)
        res.writeHead(404, { "Content-Type": "application/json" })
        res.end(JSON.stringify({ message: "not found" }))
    }

}).listen(PORT, () => {
    console.log(`Servidor aberto no link: http://localhost:${PORT}/`)
})