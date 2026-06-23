var agora = new Date()
var horario = agora.getHours()

console.log(`Seu horário é de: ${horario}:00 horas`)

if (horario > 0 && horario < 12) {
    console.log(`Bom dia!`)
} else if (horario <= 18) {
    console.log(`Boa tarde!`)
} else {
    console.log(`Boa noite!`)
}
