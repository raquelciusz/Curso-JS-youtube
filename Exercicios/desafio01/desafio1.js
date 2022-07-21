function carregar() {
    var msg = window.document.getElementById('msg') //criei pra ligar com o html, inclusive a car tem o mesmo nome da id pra nao confundir
    var img = window.document.getElementById('imagem') //criei pra ligar com o html, inclusive a car tem o mesmo nome da id pra nao confundir
    var data = new Date() //pra pegar data ou hora atual
    var hora = data.getHours() //pra dizer que quero a hora
    msg.innerHTML = `Agora sao ${hora} horas. <br>` //pra substituir o texto da div msg que atualmente esta vazia

    if (hora >= 0 && hora < 12) {
        msg.innerHTML += '<strong>Bom dia!</strong>' //adicionei a mensagem de bom dia dentro da div msg
        img.src = 'manha.jpg' //serve pra substituir a imagem no html
        document.body.style.background = '#e2cd9f' //muda a cor do background
    } else if (hora > 12 && hora <= 18) {
        msg.innerHTML += '<strong>Boa tarde!</strong>'
        img.src = 'tarde.jpg' //serve pra substituir a imagem no html
        document.body.style.background = '#b9846f'
    } else {
        msg.innerHTML += '<strong>Boa noite!</strong>'
        img.src = 'noite.jpg' //serve pra substituir a imagem no html
        document.body.style.background = '#515154'
    }
}