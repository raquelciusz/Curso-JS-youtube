var agora = new Date() //pra pegar horario atual e sempre new Date()
var hora = agora.getHours() //diz que desse newDate voce quer a hora atual com getHours
console.log(`Agora sao exatamente ${hora} horas`)
if (hora >= 7 && hora < 12){
    console.log('Bom dia!')
} else if (hora > 12 && hora <= 18) {
    console.log('Boa tarde!')
} else if (hora < 7) {
    console.log('E de madrugada! Vai dormir')
} else {
    console.log('Boa noite')
}