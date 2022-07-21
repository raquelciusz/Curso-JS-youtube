var agora = new Date()
var diaSem = agora.getDay()

/* esses sao os numeros que o sistema considera ao usar getDay
    0 = Domingo
    1 = Segunda
    2 = Terca
    3 = Quarta
    4 = Quinta
    5 = Sexta
    6 = Sabado
*/

//voce poderia escrever varios if else pra printar o nome dos dias na tela ao inves dos numeros, mas sera mais facil usar o switch

switch(diaSem) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terca')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sabado')
        break
    default:
        console.log('ERRO dia invalido')
}