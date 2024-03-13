//Operador Spred e Rest => ... (usado para trabalhar com arrays e objetos)
//Spred

const arrayOriginal = [1, 2, 3, 4];
const arrayFake = [...arrayOriginal];

console.log(arrayFake)

const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8];
const juntar = [...arr1, ...arr2]
console.log(juntar)

//Com objetos, o spread pode ser usado para criar cópias e mesclar propriedades de objetos:

const objOriginal = {
    nome: 'Pedro',
    idade: 17
}
const objFake = {
    ...objOriginal
}
console.log(objFake)

const novoObj = {...objOriginal, profissao: 'Dev'}
console.log(novoObj)

//Rest: O operador rest também utiliza os três pontos (...), mas em um contexto diferente. Ele é usado principalmente em funções para lidar com um número variável de argumentos.

function soma(...numeros){
    return numeros.reduce((total, numero) => total+numero, 0)
}
console.log(soma(1, 2, 3, 4, 5, 6))
console.log(soma(10, 20, 30))

//Quando definimos uma função, podemos usar o operador rest para capturar todos os argumentos passados para ela em um array. Isso é útil quando não sabemos quantos argumentos serão passados ou quando queremos uma maneira mais flexível de lidar com eles.