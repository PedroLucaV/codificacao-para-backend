const array = []
const vetor = new Array()

console.log(typeof(array))
console.log(typeof(vetor))

const produtos = ['Arroz', 'Feijão', 'Yorgut']
console.log(produtos[1])

//Inclusão e Exclusão de elementos/itens

const jogosAtemporais = ['God of War', 'Devil May Cry', 'Grand Theft Auto', 'The Sims']
console.log(jogosAtemporais)

jogosAtemporais.push('Pokemon') // Adiciona ao final
console.log(jogosAtemporais)

jogosAtemporais.unshift('Halo') // Adiciona ao inicio do Array, deslocando os itens do array para frente, colocando este no começo
console.log(jogosAtemporais)

jogosAtemporais.pop() //exclui o ultimo
console.log(jogosAtemporais)

jogosAtemporais.shift() //Exclui o primeiro, realocando todos;
console.log(jogosAtemporais)

//Verificar tamanho do array

const numeros = [1, 2, 3, 4, 5, 6]
console.log(numeros.length)

//Apresentar dados de array
const cidades = ['Maceió', 'Rio Largo', 'Marechal Deodoro']
console.log(`${cidades} \t ${cidades.toString()} \n ${cidades.join(', ')}`) /* Join separa os dados por uma forma expecifica de como queremos */

//localizar elementos:
const number = [1, 1231, 31, 123, 51, 61, 25, 51];

console.log(number.indexOf(51)) //me informa o index do elemento que quero, porém, ele só encontra o primeiro elemento e me retorna somente a posição deste
console.log(number.lastIndexOf(51)) //Esse informa somente a ultima posição encontrada deste valor, lendo de tras para frente
console.log(number.indexOf(5)) //Caso não exista um valor, ele coloca o -1