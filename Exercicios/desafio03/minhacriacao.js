function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var formularioAno = window.document.getElementById('txtano')
    var res = window.document.getElementById('resultado')
    if (formularioAno.value.length == 0) {
        window.alert('ERRO! Verifique os dados e tente novamente')
    } else {
        var formularioPais = window.document.getElementsByName('radpais')
        var quantosAnos = ano - Number(formularioAno.value)
        var dentroOUforaPais = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (formularioPais[0].checked) {
            dentroOUforaPais = 'Brasileiro'
            if (quantosAnos >= 0 && quantosAnos <= 2) {
                //voce mora a pouco tempo no brasil
                img.setAttribute('src', 'brasil-poucotempo.jpg')
            } else if (quantosAnos < 10) {
                //voce mora a um bom tempo no brasil
                img.setAttribute('src', 'brasil-medio.jpg')
            } else {
                //voce mora a bastante tempo no Brasil
                img.setAttribute('src', 'brasil-faztempo.jpg')
            }
        } else if (formularioPais[1].checked) {
            dentroOUforaPais = 'Estrangeiro'
            if(quantosAnos >= 0 && quantosAnos < 2) {
                //voce tem a pouco tempo no exterior
                img.setAttribute('src', 'exterior-recente.jpg')
            } else if(quantosAnos < 10) {
                //voce more um bom tempo no exterior
                img.setAttribute('src', 'exterior-medio.jpg')
            } else {
                //voce mora a muito tempo no exterior
                img.setAttribute('src', 'exterior-faztempo.jpg')
            }
        }
    res.innerHTML = `Voce e ${dentroOUforaPais} a ${quantosAnos} anos. <br>`
    res.appendChild(img)
    }
}