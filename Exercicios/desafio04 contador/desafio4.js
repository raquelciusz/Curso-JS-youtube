function contar() {
    var inicio = window.document.getElementById('txti')
    var fim = window.document.getElementById('txtf')
    var passo = window.document.getElementById('txtp')
    var res = document.getElementById('res')
    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        alert('ERRO, coloque numeros maiores que 0 para rodar')
    } else {
        res.innerHTML = 'Contando:'
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0) {
            alert('Passo invalido! Considerando passo com valor 1')
            p = 1
        }
        if (i < f) { //se o valor do inicio for menor que o do final faz a contagem normal do maior para o menor
            //CONTAGEM CRESCENTE
            for (let c = i; c <= f; c += p) { //c vai comecar do i (inicio), enquanto contador for menor ou igual ao f(fim), contador recebe ele mesmo mais o p (passo)
                res.innerHTML += ` ${c} \u{1F449}`
            }
        } else {
            //CONTAGEM REGRESSIVA
            for(var c = i; c >=f; c-= p){ //enquanto c que e o inicio for maior ou igual ao fim o contador vai perder o passo
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
    
}