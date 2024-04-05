// Bloco de código para tratar instruções async
// try {
//     // Instrucao que demora para acontecer
// } catch (error) {
//     console.log(error);
// };

const b = '10';

if(!Number.isInteger(b)){
    console.log('O valor de B não é inteiro');
    throw new Error('O valor de B não é inteiro');
};

console.log('resto dos codigos');