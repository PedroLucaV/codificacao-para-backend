const colors = require('colors')
const inquirer = require('inquirer')

inquirer
    .prompt([
        {
            name: 'p1',
            message: 'Qual a primeira nota?'
        },
        {
            name: 'p2',
            message: 'Qual a segunda nota?'
        }
    ])
    .then((answers) => {
        const media = ((Number(answers.p1) + Number(answers.p2))/2).toFixed(1)
        if(media >= 6){
            console.log(`Aluno aprovado com a média ${media}`.america)
        }else{
            console.log(`Aluno reprovado com a média de ${media}`.bgRed)
        }
    })
    .catch()