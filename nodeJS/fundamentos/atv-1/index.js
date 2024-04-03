const minimist = require('minimist')
const soma = require('./soma.js').soma

const args = minimist(process.argv.slice(2))
console.log(args)

const num1 = args['numero1']
const num2 = args['numero2']

console.log(`${num1} + ${num2} = ${soma(num1, num2)}`)