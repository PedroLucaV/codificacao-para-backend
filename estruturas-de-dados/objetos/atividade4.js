const data = require('./onibus.json')

const onibusPorStatus = (status) => {
    const onibus = data.onibus.filter((onibus) => {
        onibus.status == status
    })
    return onibus.length != 0 ? {onibus} : {message:'Onibus não encontrado'}
}

const statusOnsbinus = "em operação"
const situacaoOnibus = onibusPorStatus(statusOnsbinus)
console.log(situacaoOnibus)