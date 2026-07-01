let val = [8, 1, 7, 4, 2, 9]
/*
for (let i = 0; i < val.length; i++) {
    console.log(`A posição ${i} tem o valor ${val[i]}`)
}
*/

val.sort()
for(let pos in val) {
    console.log(`A Posição ${pos} tem o valor ${val[pos]}`)
}