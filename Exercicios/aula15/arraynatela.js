var valores = [2, 3, 5, 4, 6, 1]
for(let pos = 0; pos < valores.length; pos++) { //criei a variavel pos que comeca no 0, enquanto a variavel pos for menor do que o tamanho da array valores, o pos vai receber pos + 1
    console.log(`A posicao ${pos} tem o valor ${valores[pos]}`)
}

var valores = [2, 3, 5, 4, 6, 1]
for(let pos in valores) { //para cada posicao em valores
    console.log(`A posicao ${pos} tem o valor ${valores[pos]}`) //mostre valores
}