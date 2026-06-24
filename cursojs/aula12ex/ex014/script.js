function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora}:00 horas!`

    if (hora >= 0 && hora < 12) {
        img.scr = 'manha.png'
        document.body.style.background = '#e7d291'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'tarde.png'
        document.body.style.background = '#af6234'
    } else {
        img.src = 'noite.png'
        document.body.style.background = '#2f3d40'
    }
}
    

