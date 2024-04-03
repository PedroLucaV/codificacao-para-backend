// Para pegar instruções do terminal, pegmos o process.argv

console.log(process.argv)

const args = process.argv.slice(2)

console.log(args+'\n')

const nome = args[0].split('=')[1].replace('_', " ")

console.log(nome)

const idade = Number.parseInt(args[1].split('=')[1])
console.log(idade)

console.log(`Olá ${nome}, você possui ${idade} anos!`)