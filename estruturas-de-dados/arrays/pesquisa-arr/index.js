//Pesquisar e Filtrar dados de um array
const numeros = [1, 2, 3, 4, 5]

//Encontra o primeiro elemento que satisfaz a condição
const encontrar = numeros.find((num) =>{
    return num > 2
})
console.log(encontrar) //Sempre retorna o primeiro elemento que satisfaz a condição desejada

//Cria um novo array com todos elementos que passaram no teste
const filter = numeros.filter((num) => num % 2 == 0)
console.log(filter)

//Verifica se um array possui um determinado valor, retorna true ou false
const includes = numeros.includes(4)
console.log(includes)

//Todos os elementos do array passam no teste logica da funcao
const every = numeros.every((num) => num % 2 == 0)
console.log(every)

// Verifica se pelo menos um elemento no array satisfaz a condição
const some = numeros.some((num) => num % 2 == 0)
console.log(some)