const numero = document.getElementById('inNumero')
const btnAposta = document.getElementById('apostar')
const btnReiniciar = document.getElementById('reiniciar')
const tentar = document.getElementById('tentar')

const erros = document.getElementById('erros')
const chances = document.getElementById('chances')
const dica = document.getElementById('dica')
const tentativas = []
let ganhou = false

let erro = 0
let tentativa = 0
let chance = 6

function randNumber(min, max){
    return Math.round(Math.random() * (max + min) - min)
}
let numeroDoDia = randNumber(1, 100)
console.log(numeroDoDia)

btnAposta.addEventListener('click', () => {
    chances.innerHTML = chance
    let numer = numero.value
    Number(numer)
    if(chance !== 0){
        if(numer != numeroDoDia){
            chance--
            erro++
            tentativas.push(numer)
            erros.innerHTML = erro
            tentar.innerHTML = `[${tentativas}]`
            chances.innerHTML = chance
            if(numer < numeroDoDia){
                dica.innerHTML = `É um número maior que ${numer}`
            }else if(numer > numeroDoDia){
                dica.innerHTML = `É um número menor que ${numer}`
            }
        }else if(numer == numeroDoDia){
            ganhou = true
            alert('Voce Ganhou')
            dica.innerHTML = `Você ganhou o jogo! O número era: ${numeroDoDia}`
            btnAposta.disabled = true
        }
        numero.value = ''
    }else{
        alert('Voce Perdeu')
        dica.innerHTML = `Você perdeu o jogo! O número era: ${numeroDoDia}`
        btnAposta.disabled = true
    }
})

btnReiniciar.addEventListener('click', () => {
    location.reload()
})