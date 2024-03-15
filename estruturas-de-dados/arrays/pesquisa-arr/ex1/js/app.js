const modelo = document.getElementById('modelo')
const preco = document.getElementById('preco')
const outLista = document.getElementById('outLista')

const listar = document.getElementById('listar')
const filtrar = document.getElementById('filtrar')
const adicionar = document.getElementById('add')

let carros = []

adicionar.addEventListener('click', () => {
    let modeloCarro = modelo.value
    let precoDoCarro = Number(preco.value)
    if(modeloCarro !== '' || precoDoCarro !== '' || !isNaN(precoDoCarro) || precoDoCarro <= 0){
        carros.push({
            modelo: modeloCarro,
            preco: precoDoCarro.toFixed(2)
        })
        alert(`Adicionado a fila de venda!\nModelo: ${modeloCarro}\nPreço: R$${precoDoCarro.toFixed(2)}`)
        modelo.value = ''
        preco.value = ''
    }else{
        alert('Informe um valor valido!')
        modelo.value = ''
        preco.value = ''
    }
})

listar.addEventListener('click', () => {
    outLista.innerHTML = ''
    if(carros.length == 0){
        alert('Não há carros cadastrados!')
        modelo.focus()
        return
    }else{
        let lista = ''
        carros.forEach((carro) =>{
            return lista+= `Modelo: ${carro.modelo} - R$${carro.preco}<br>`
        })
        outLista.innerHTML = lista
    }
})

filtrar.addEventListener('click', () => {
    outLista.innerHTML = ''
    let precoDesejado = window.prompt('Informe o valor que deseja')
    precoDesejado = Number(precoDesejado)
    if(isNaN(precoDesejado) || precoDesejado == '' || precoDesejado == 0){
        alert("Informe um valor valido!")
        return
    }else{
        const filterCar = carros.filter((carro) => {
            return carro.preco <= precoDesejado
        })
        let listas = ''
        filterCar.forEach((carro) => {
            return listas+= `Modelo: ${carro.modelo} - R$${carro.preco}<br>`
        })

        outLista.innerHTML = listas
    }
})