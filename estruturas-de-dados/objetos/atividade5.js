const data = require('./onibus.json')

const contarOnibusDisponivelPorId = (idOnibus) => {
    // const onibusId = data.onibus.find((onibus) => onibus.id === idOnibus)

    // return onibusId ? {onibusId} : {message: "Não há onibus com este ID"}

    const onibusId = data.onibus.filter((onibus) => onibus.id === idOnibus)

    return onibusId.length != 0 ? {onibusId} : {message: "Não há onibus com este ID"}
}

const id = 'A100'
const onibusDisponivel = contarOnibusDisponivelPorId(id)
console.log(onibusDisponivel)