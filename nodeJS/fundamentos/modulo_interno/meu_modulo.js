module.exports = {
    soma(a, b){
        console.log(`${a+b}`)
    },
    aoQuadrado(a){
        console.log(`${Math.pow(a, 2)}`)
    },
    subtracao(a, b){
        console.log(`${a-b}`)
    },
    divisao(a, b){
        if(b > 0){
            console.log(`${a/b}`)
            return
        }else{
            console.log(`Não pode dividir, pois o divisor ${b} é menor ou igual a 0`)
            return
        }
    },
    multiplicacao(a, b){
        console.log(`${a*b}`)
    },
    listArr(arr){
        return arr.map((a) => console.log(a))
    }
};