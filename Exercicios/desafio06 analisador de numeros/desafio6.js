let num = document.getElementById('txtnum') //fiz a ligacao do input de numero
let res = document.getElementById('res')
let lista = document.getElementById('selnum') //fiz a ligacao com a div que segura a lista
let valores = [] //essa array vai ser usada para analise de dados

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) { //se number for maior ou igual a 1 e menor ou igual a 100
        return true //valor aceito
    } else {
        return false //se nao valor nao aceito
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) { //se na lista o numero de n for diferente de -1 (-1 significa que o valor nao foi encontrado na lista)
        return true //valor aceito
    } else {
        return false
    }
}

function adicionar() { //pra adicionar precisa verificar se e um numero e se nao esta na lista pra evitar numero repetido
    if(isNumero(num.value) && !inLista(num.value, valores)){ //criamos uma funcao chamada isNumero pra analisar se e um numero e so vai adicionar se for um numero && se nao estiver inLista que e outra funcao criada
        valores.push(Number(num.value)) //adicionei valores na array e esses numeros adicionados vieram dos valores de num
        let item = document.createElement('option') //adicionei o elemento no select, aqui eu criei um item, ou option, pra segurar o numero
        item.text = `Valor ${num.value} adicionado.` //texto que aparecera dentro da option
        lista.appendChild(item) //adicionei o valor na variavel lista
        res.innerHTML = '' //exemplo, ja tem numeros na lista e eu cliquei em finaliza, mas agora eu adicionei mais um numero, essa linha aqui fara as frases la em baixo serem apagadas pra recalcular os valores
    } else {
        window.alert("Valor invalido ou ja encontrado na lista!")
    }
    num.value = '' //serve pra limpar o campo de digitacao logo depois q clica em adicionar
    num.focus() //serve para manter o mouse piscando no campo de digitacao
}

function finalizar() {
    if (valores.length == 0) { //verifiquei se a array valores ta vazia
        window.alert('Adicione valores antes de finalizar!') //adicione valores!!
    } else { //se nao esta vazio fara a analise abaixo
        let tot = valores.length //pra saber quantos elementos a array tem
        let maior = valores[0] //posicao 0 pq antes de adicionar numeros nao sabemos quais numeros estarao la pra dizer qual e o maior
        let menor = valores[0] //posicao 0 pq antes de adicionar numeros nao sabemos quais numeros estarao la pra dizer qual e o menor
        let soma = 0 // 0 pra nao interferir na soma
        let media = 0
        for(let pos in valores) { //pra eu analisar qual e o maior e menor numero da lista tenho que ir varrendo todos os numeros pra analisar, esse for fara isso, ira varrer
            soma += valores[pos] //pra somar os valores atuais, comeca com 0 e vai somando so proximos valores
            if (valores[pos] > maior) //se valores na posicao pos for maior do que o maior valor
                maior = valores[pos] //o maior valor deixa se ser o anterior passa a ser valores pos
            if (valores[pos] < menor) //se valores na posicao pos for menor do que o menor valor
                menor = valores[pos] //o menor valor passa a ser valores pos
        }
        media = soma / tot //se eu sei a soma e o total, consigo fazer a media
        res.innerHTML = '' //ao clicar no finalizar vai limpar a lista
        res.innerHTML += `<p>Ao todo, temos ${tot} numeros cadastrados. </p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A media dos valores digitados e ${media}.</p>`
    }
}