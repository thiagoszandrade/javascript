function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.getElementById('res')
    var img = document.getElementById('img')
    img.innerHTML += 'Olá'

    if (fAno.value.length == 0 || fAno.value > ano) {
        alert(`[ERRO] Verifique os dados e tente novamente!`)
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''

        var txtp = document.getElementById('txtp')
        txtp.innerHTML = ''

        img.style.width = '200px'
        img.style.height = '200px'
        img.style.margin = 'auto'
        img.style.borderRadius = '50%'
        img.style.alignItems = 'center'
        img.style.alignContent = 'center'
        
        
        if (fsex[0].checked) {
            genero = 'Homem'
            img.style.background = 'rgb(66, 164, 250)'
            if (idade >= 0 && idade < 10) {
                img.innerHTML = 'Foto <br> criança <br> homem'
            } else if (idade < 21) {
                img.innerHTML = 'Foto <br> jovem <br> homem'
            } else if (idade < 50) {
                img.innerHTML = 'Foto <br> adulto <br> homem'
            } else {
                img.innerHTML = 'Foto <br> idoso <br> homem'
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            img.style.background = 'rgb(216, 89, 255)'
            if (idade >= 0 && idade < 10) {
                img.innerHTML = 'Foto <br> criança <br> mulher'
            } else if (idade < 21) {
                img.innerHTML = 'Foto <br> jovem <br> mulher'
            } else if (idade < 50) {
                img.innerHTML = 'Foto <br> adulta <br> mulher'
            } else {
                img.innerHTML = 'Foto <br> idosa <br> mulher'
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML += `Detectamos ${genero} com ${idade} anos.`
        
    }
}