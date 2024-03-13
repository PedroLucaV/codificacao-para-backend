//this é uma palavra-chave especial que é automaticamente definida em cada contexto de execução. O valor de this é determinado pelo modo como uma função é chamada. Ele se refere ao objeto ao qual a função está vinculada ou ao contexto de execução atual.
const pessoa = {
    saudacao: 'Olá, seus monstros',
    falar(){
        console.log(this.saudacao) //faz referencia ao contexto lexo do objeto pessoa, ou seja, a propriedade saudacao do objeto pessoa
    }
}
pessoa.falar() //puxa o objeto pessoa e executa a funcao falar()
const falar = pessoa.falar //aqui estou atribuindo o comportamento falar do objeto
//já como o this faz referencia a funcao pessoa, aqui estou basicamente criando outro contexto para a pessoa.falar, dessa forma, perdendo o escolpo com a saudacao que existe, por isso o resultado undefined

//Função bind: Amarra qualquer criacao de propriedade a seu objeto de origem
const pessoaFala = pessoa.falar.bind(pessoa)
pessoaFala()

function Pessoa(){
    this.idade = 0
    // setInterval(function(){
    //     console.log(this.idade++)
    // }.bind(this), 1000)

    const self = this
    setInterval(function(){
        self.idade++
        console.log(self.idade)
    }, 1000)
}

new Pessoa

function Pessoa2(){
    this.idade = 0
    setInterval(() =>{
        console.log(this.idade++)
    }, 1000)
}

new Pessoa2