const path = require('path')

const extension = path.extname('arquivo.pdf')
console.log(extension)

if(extension ==  '.pdf'){
    console.log('Um momento amigo')
}else{
    console.log(`Permitido o tipo de arquivo ${extension}`)
}