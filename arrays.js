//  posições     0     1  
function arrays(){
const fila = [23,45,34,47]
//metodos para adicionar
fila.unshift(67)
fila.push(34)
console.log(fila)

//metodos para remover
fila.pop()
fila.shift()
console.log(fila)

//recortar parte do array
const parte = fila.slice(1,3)
console.log(parte)
}
module.exports = arrays;