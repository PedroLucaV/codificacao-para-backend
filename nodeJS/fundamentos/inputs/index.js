const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Qual seu nome? ', (resp) => {
    console.log(`Olá ${resp}`)
    readline.close()
});