function tabuada() {
    let num = document.getElementById('txtnumero') //sempre comeca linkando as infos dos inputs
    let tab = document.getElementById('seltab') //linka a info do select
    if (num.value.length == 0) { //se o valor do comprimento do input for 0
        window.alert('Por favor, digite um numero!') //coloque esse alerta na tela
    } else { //se o valor nao for zero, faca esse bloco abaixo
        let n = Number(num.value) //sempre coverte a info do input
        let c = 1 //tabuada vai comecar com 1
        tab.innerHTML = '' //antes de mostrar a tabuada eu limpei as infos do select
        while (c <= 10) { //enquanto c for menor ou igual a 10 faca o bloco abaixo
            let item = document.createElement('option') //criei o elemento select direto no javascript
            item.text = `${n} x ${c} = ${n*c}` //item.text pra adicionar um texto dentro do item. Ali so fiz a multiplicacao do 1, pra fazer as proximas linhas preciso acrescentar c++ pra ir gerando num x 2 num x 3 etc..
            item.value = `tab${c}` //isso e pra ser usado por outras linguagens, e o valor de cada option dentro do select, e pra identificar o campo
            tab.appendChild(item) //coloquei a tabuada dentro do select
            c++ //c++ pra gerar o loop e fazer a multiplicacao dos outros numeros, nao somente do 1 q e o valor inicial do c

        }
    }
}