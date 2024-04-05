// Atividade 3: Informações de Memória
// Escreva um código que exiba a quantidade total de memória do sistema em bytes.
// Em seguida, converta o valor para uma unidade mais legível, como kilobytes (KB), megabytes (MB) ou gigabytes (GB).

const os = require('node:os')
const memory = os.freemem();
const kb = memory/1000
const mb = kb/1000
const gb = mb/1000

console.log(`${memory.toFixed(2)} bytes \n${kb.toFixed(2)} kilobytes \n${mb.toFixed(2)} megabytes\n${gb.toFixed(2)} gigabytes`)