// Atividade 4: Informações do Usuário
// Escreva um código que exiba o nome do usuário do sistema atual.
// Em seguida, exiba também o diretório inicial do usuário.

const os = require('node:os')

const user = os.userInfo().username
const homedir = os.homedir()

console.log(`Nome do Usuário: ${user}\nDiretório Inicial: ${homedir}`)