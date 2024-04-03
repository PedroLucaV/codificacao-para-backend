const minimist = require('minimist')

const args = minimist(process.argv.slice(2))
console.log(args)

const nome = args['nome']
const idade = args['idade']

// Lembrar de passar -- antes dos argumentos no terminal
// Exemplo: node .\server.js --nome=Pedro --idade=17

console.log(`Nome: ${nome} \n Idade: ${idade}`)