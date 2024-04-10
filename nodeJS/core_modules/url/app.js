const url = require('node:url')
const adress = 'https://www.meusite.com.br/catalog?produtos=cadeira'
const parseURL = new url.URL(adress)
const param = {param1: 'value1', param2: 'value2'}

// console.log(parseURL.host)
// console.log(parseURL.pathname)
parseURL.search = param.param1
console.log(parseURL.search)
// console.log(parseURL.searchParams)
// console.log(parseURL.searchParams.get('produtos'))
console.log(parseURL.searchParams.set('produtos', 'mesa'))
// console.log(parseURL.searchParams)
console.log(parseURL)