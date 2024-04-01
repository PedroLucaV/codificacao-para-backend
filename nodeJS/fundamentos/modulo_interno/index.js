const modulo = require('./meu_modulo')
const fs = require('fs')
const a = [1, 2, 3, 4, 5, 6, 7, 8]
console.log(modulo)

const soma = modulo.soma
soma(2, 2)

const aoQuadrado = modulo.aoQuadrado
aoQuadrado(2)

const sub = modulo.subtracao
sub(2, 2)

const div = modulo.divisao
div(2, 2)

const multi = modulo.multiplicacao
multi(2, 2)

const list = modulo.listArr
list(a)

// if(soma(2,2) == aoQuadrado(2)){
//     fs.unlink('system32.txt', (err) => {
//         if (err) {
//           console.error(err);
//         } else {
//           console.log('Erri Essi');
//         }
//     });
// }