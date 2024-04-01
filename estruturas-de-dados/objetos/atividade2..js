const data = require('./onibus.json')

const contarOnibusDisponivelPorLinha = (idLinha) => {
    const onibusDaLinha = data.onibus.filter((onibus) => onibus.linha === idLinha)

    return onibusDaLinha.length != 0 ? {onibusDaLinha} : {message: 'Não há onibus para esta linha'}
}

const id = 2
const onibusDisponivel = contarOnibusDisponivelPorLinha(id)
console.log(onibusDisponivel)