var idade = 22
if (idade < 16) {
    console.log('Nao vota')
} else if (idade >= 16 && idade < 18 || idade > 65) {
    console.log('Voto Opcional')
} else {
    console.log('Voto obrigatorio')
}