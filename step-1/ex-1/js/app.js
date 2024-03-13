const codigoFunc = document.getElementById('input-codigo'); 
const horasTrab = document.getElementById('input-hora-trabalhada');
const turnoFunc = document.getElementById('input-turno');
const categoriaFunc = document.getElementById('input-categoria');
const divFolha = document.getElementById('folha-pag')
const btn = document.getElementById('submit-button')

let c = 0

function valHoraTrab(caF, tF, sM) {
    if(caF === 'G' && tF === 'N'){
        return sM * 0.15
    }else if(caF === 'G' && tF === 'M' || tF === 'V'){
        return sM * 0.15
    }else if(caF === 'O' && tF === 'N'){
        return sM * 0.13
    }else if(caF === 'O' && tF === 'M' || tF === 'V'){
        return sM * 0.10
    }else{
        return 'a'
    }
}

function salIni(vHT, hT){
    return vHT * hT
}

function valeAlimentacao(sI){
    if(sI <= 300){
        return Number(0.20 * sI)
    }else if(sI > 300 && sI <= 600){
        return Number(0.15 * sI)
    }else if(sI > 600){
        return Number(0.05 * sI)
    }
}

function salarioFinal(vA, sI){
    return vA + sI
}

btn.addEventListener('click', (event)=>{
    event.preventDefault()
    const cF = codigoFunc.value
    const hT = horasTrab.value
    const tF = turnoFunc.value
    const caF = categoriaFunc.value
    const dF = divFolha
    
    const sM = 450;
    let vHT = 0;
    let sF = 0;
    let sI = 0;
    let vA = 0;

    if(cF === '' && hT === '' || tF === '' || caF === ''){
        window.alert('!')
    }else{
        if(tF != 'M' && tF != 'V' && tF != 'N'){
            alert(tF)
        }else if(caF !== 'O' && caF !== 'G'){
            alert(caF)
        }else if(isNaN(cF)){
            alert(cF)
        }else if(isNaN(hT)){
            alert(hT)
        }else{
            vHT = valHoraTrab(caF, tF, sM)
            console.log(valHoraTrab(caF, tF, sM))
            sI = salIni(vHT, hT)
            vA = valeAlimentacao(sI)
            sF = salarioFinal(vA, sI)
            const divCreate = document.createElement('div')
            
            divCreate.innerHTML = `
                <div class='info-func'>
                    <p>Código do Funcionario: ${cF}</p>
                    <p>Turno: ${tF}</p>
                    <p>Horas Trabalhadas: ${hT}</p>
                    <p>Categoria do Funcionario: ${caF}</p>
                </div>
                <div class='info-salarial'>
                    <p>Valor p/Hora Trabalhada: ${vHT}</p>
                    <p>Salario Inicial: ${sI}</p>
                    <p>Vale Alimentação: ${vA}</p>
                    <p>Salario Final: ${sF}</p>
                </div>
            `
            divCreate.classList.add('divFol')
            dF.appendChild(divCreate)
        }
    }
})