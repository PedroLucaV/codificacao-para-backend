// Arquivo async
const fs = require('fs')

console.log('start')

// fs.writeFileSync('Arquivo2.txt', 'Olá', () => {
//     setTimeout(() => {

//     },3000)
// })

fs.writeFile('Arquivo.txt', 'Olá', () => {
    setTimeout(() => {
        console.log('Arquivo Criado')
    },5000)
})

console.log('End')