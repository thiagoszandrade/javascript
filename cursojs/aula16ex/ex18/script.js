let numero = document.getElementById('numero')
let num = Number(numero.value.length)
let tabela = document.getElementById('tabela')
let res = document.getElementById('resformulario')
let list = []

function verificar(n) {
    for (var c in list) {
        if (c == num) {
            return 'true'
        } else {
            return 'false'
        }
    }
}

res.innerHTML = '1'

function add() {
    if (num < 1 || num > 100) {
        alert(`Número inválido! Tente novamente.`)
    } else if (verificar())
}