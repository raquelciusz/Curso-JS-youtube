let familia = ["Raquel", "Kevin", "Rosa", "Valdir", "Rosemeire"]
familia.sort()
console.log(`O vetor de posicao 2 tem o nome de ${familia[1]}`)

for(let posicao in familia) {
    console.log(`A posicao ${posicao} tem o nome de ${familia[posicao]}`)
}