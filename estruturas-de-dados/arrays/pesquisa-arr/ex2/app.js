const nome = document.getElementById('nome')
const idade = document.getElementById('idade')
const outLista = document.getElementById('outLista')

const listar = document.getElementById('listar')
const filtrar = document.getElementById('filtrar')
const adicionar = document.getElementById('add')
const criancas = []

adicionar.addEventListener('click', () => {
    let nomeCrianca = nome.value
    let idadeCrianca = Number(idade.value)
    if(nomeCrianca !== '' && idadeCrianca !== '' && !isNaN(idadeCrianca) && idadeCrianca < 12){
        criancas.push({
            nome: nomeCrianca,
            idade: parseInt(idadeCrianca)
        })
        alert(`Adicionado a fila!\nNome: ${nomeCrianca}\nIdade: ${idadeCrianca}`)
        nome.value = ''
        idade.value = ''
    }else{
        alert('Informe um valor valido! (A idade de criança é até 11 anos!)')
        nome.value = ''
        idade.value = ''
    }
})

listar.addEventListener('click', () => {
    outLista.innerHTML = ''
    if(criancas.length == 0){
        alert('Não há criancas cadastrados!')
        nome.focus()
        return
    }else{
        let lista = ''

        criancas.sort(function(a,b) {
            return a.idade - b.idade;
        });

        criancas.forEach((crianca) =>{
            criancas.sort()
            return lista+= `Nome: ${crianca.nome} - Idade: ${crianca.idade}<br>`
        })
        outLista.innerHTML = lista
    }
})

filtrar.addEventListener('click', () => {
    outLista.innerHTML = ''
    let idadeDesejada = window.prompt('Insira uma idade maxima para filtra')
    idadeDesejada = Number(idadeDesejada)
    if(isNaN(idadeDesejada) || idadeDesejada == '' || idadeDesejada == 0 || idadeDesejada >= 12){
        alert("Informe uma idade valida! (A idade de criança é até 11 anos!)")
        return
    }else{
        const filterChildren = criancas.filter((crianca) => {
            return crianca.idade <= idadeDesejada
        })
        let listas = ''
        criancas.sort(function(a,b) {
            return a.idade - b.idade;
        });
        filterChildren.forEach((crianca) => {
            criancas.sort()
            return listas+= `Nome: ${crianca.nome} - Idade: ${crianca.idade}<br>`
        })

        outLista.innerHTML = listas
    }
})