function verificar () {
    var data = new Date()
    var ano = data.getFullYear()

    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || fano.value > ano) {
        alert('Verfique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'imagem/hcrianca.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'imagem/hjovem.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'imagem/hadulto.png')
            } else {
                //idoso
                img.setAttribute('src', 'imagem/hvelho.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'imagem/mcrianca.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'imagem/mjovem.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'imagem/madulto.png')
            } else {
                //idoso
                img.setAttribute('src', 'imagem/mvelha.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} de ${idade} anos`
        res.appendChild(img)
    }
}