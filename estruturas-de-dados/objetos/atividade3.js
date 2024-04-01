const data = require('./onibus.json')

const listarParadasPorLinha = (idLinha) => {
    const linha = data.linhas.find((linha) => {
        return linha.id === idLinha
    })
    // console.log(linha.paradas)
    if(linha){
        const paradasOrdenadas = linha.paradas.sort((a, b) => a.ordem - b.ordem)
        return {paradasOrdenadas}
    }else{
        return {error: 'ERRO!'}
    }
}

const id = 2

const paradasPorLinha = listarParadasPorLinha(id)
console.log(paradasPorLinha)