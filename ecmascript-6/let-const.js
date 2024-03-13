//1º Global

let filme = 'Senhor dos Aneis' //Por estar em um escolpo global, pode ser usada em qualquer espaço

{
    //2º Função 
    //Só funciona nesse escolpo
    let filme2 = 'Star Wars'
    if(true){
        //3º Bloco
        let filme3 = 'Barbie'
        console.log(filme)
        console.log(filme2)
        console.log(filme3)
    }
    console.log(filme)
    console.log(filme2)
    console.log(filme3)
}

console.log(filme)
console.log(filme2) //Pela variavel filme2 estar dentro de um contexto unico (no caso uma função), e so pode ser usada dessa forma
console.log(filme3)