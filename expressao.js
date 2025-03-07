// função de expressão
const subtrair = function(num1, num2){
    return num1 - num2
} 
const somar = function(num1, num2){
    return num1 + num2
} 
const multiplicar = (num1, num2, callback)=>{
   const resultado = num1 * num2
   return callback(resultado)

} 
const fseta = (numero)=> numero % 2 == 0

const resultado = multiplicar(4, 6, fseta)
console.log(resultado)