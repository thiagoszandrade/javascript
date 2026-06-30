function contagem() {
    var button = document.getElementById('button')
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var txtcont = document.getElementById('txtcont')
    var numI = Number(inicio.value)
    var numF = Number(fim.value)
    var pas = Number(passo.value)

    txtcont.innerHTML = ''

    if (numI == '' || numF == '') {
        alert('Impossível contar!')
    } else if (numI > numF) {
        alert('Apenas contagem do menor para maior é válido!')
    } else if (pas < 1) {
        alert(`Passo inválido! Considerando PASSO 1`)
        for (numI; numI <= numF; numI++)
            txtcont.innerHTML += `${numI} → `
    } else {
        for (var c = numI; c <= numF; c += pas)
            txtcont.innerHTML += `${c} → `
    }
    txtcont.innerHTML += 'FIM!'
}