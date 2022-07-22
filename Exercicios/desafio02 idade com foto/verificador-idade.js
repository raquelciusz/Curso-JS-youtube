function verificar(){
    var data = new Date() //pra verificar a idade da pessoa pelo ano preciso saber que dia e hoje
    var ano = data.getFullYear() //full year pq ele vai pegar o ano com 4 digitos
    var formularioAno = window.document.getElementById('txtano') //pra fazer a ligacao com o input de id txtano
    var res = window.document.getElementById('res') //pra fazer a ligacao da div de id res
    if (formularioAno.value.length == 0 || Number(formularioAno.value) > ano) { //se o valor do input formalrioAno for 0 ou maior q o ano atual
        window.alert('ERRO! Verifique os dados e tente novamente.')
    } else { //me garanti com a verificacao do if, se der tudo certo vai vim aqui pro else
        var formularioSex = document.getElementsByName('radsex') //var pra ligar com o input do html, precisa ser ByName pq radsex tem o mesmo nome dos dois botoes
        var idade = ano - Number(formularioAno.value) //idade vai ser igual ao ano atual menos o ano do formulario
        var genero = ''
        var img = document.createElement('img') //isso e como se eu tivesse criando tag tag img no html
        img.setAttribute('id', 'foto') //criamos atributos da img, como se fosse o src='foto' do html
        if (formularioSex[0].checked) { //se o formulario marcado for 0, ou seja o masculino q fica na posicao 0
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //crianca
                img.setAttribute('src', 'homem-bebe.jpg')
            } else if (idade >= 10 && idade < 21) {
                //jovem
                img.setAttribute('src', 'homem-jovem.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'homem-jovem.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'homem-idoso.jpg')
            }
        } else if (formularioSex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //crianca
                img.setAttribute('src', 'mulher-bebe.jpg')
            } else if (idade >= 10 && idade < 21) {
                //jovem
                img.setAttribute('src', 'mulher-jovem.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'mulher-jovem.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'mulher-idosa.jpg')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos. <br>`
        res.appendChild(img) //isso vai fazer a imagem aparecer apos a mensagem do res, que e: detectamos genero com idade anos..
    }
}