// Atividade 6: Pesquise outros métodos e propriedades do módulo OS
// Crie um código que exiba informações adicionais do sistema operacional, como número IPV4 e IPV6 de rede, 
// Informações de tempo de atividade do sistema operacional em Horas, minutos e segundos
// Diretórios temporários.

const os = require('node:os');
const ipv6 = Object.values(os.networkInterfaces()).flat()[0].address
const ipv4 = Object.values(os.networkInterfaces()).flat()[1].address
const osTime = os.uptime() 

converteSegundosHora = (x) => {
    let seg = parseInt(x % 60)
    let min = parseInt((x/60) % 60)
    let hor = parseInt(x /60 / 60 % 60)

    return `${hor}h:${min}m:${seg}s`
}

console.log(`IPV6: ${ipv6} \nIPV4: ${ipv4}`)
console.log(`Tempo de Atividade: ${converteSegundosHora(osTime)}`)
console.log(`Diretorio de Arquivos Temporarios: ${os.tmpdir()}`)