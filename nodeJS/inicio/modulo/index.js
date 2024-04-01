const fs = require('fs')

// fs.readFile('arquivo.txt', 'utf-8', (err, data) => {
//     if(err){
//         console.log(err)
//     }
//     console.log(data)
// })

const data = 'Hello World'

fs.writeFile('arquivo.txt', data, (err) => {
    if (err) throw err;
    console.log(`O arquivo foi editado`);
});