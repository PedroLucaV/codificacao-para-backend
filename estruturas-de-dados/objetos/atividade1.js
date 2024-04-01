const data = require('./onibus.json')

// - **Consultar horários de partida e chegada por linha:**
// - Crie uma função que aceite o ID da linha como entrada e retorne os horários de partida e chegada para essa linha.

const horarioPorLinha = (idLinha) => {

    const linhas = data.linhas.find((linha) => linha.id == idLinha)

    // console.log(linhas)

    if (linhas) {
        const horarios = linhas.horarios.map((hora) => {
            return `Saida ${hora.saida} | Chegada: ${hora.chegada}`
        })
        return horarios.join('\n')
    } else {
        return { message: 'Não foi encontrada a linha' }
    }
}

const id = 7

const horariosLinha = horarioPorLinha(id)

console.log(horariosLinha)