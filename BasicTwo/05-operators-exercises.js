/*
Clase 20 - Ejercicios: Operadores
Vídeo: https://youtu.be/1glVfFxj8a4?t=6458
*/

// 1. Crea una variable para cada operación aritmética
let a = 10
let b = 15

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a % b)
console.log(a ** b)
// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas
let e = 25

e = 5
console.log(e)

e += 5
e -= 5
e *= 5
e /= 5
e %= 5
e **= 5

e = 10
// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
console.log(a < b)
console.log(a <= b)
console.log(a == 10)
console.log(a === e)
console.log(a != 50)
// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log(a > b)
console.log(a >= b)
console.log(a == b)
console.log(b === 10)
console.log(b !== 15)
// 5. Utiliza el operador lógico and
console.log(a < b && b > e)
console.log(20 > 10 && 32 < 24)
// 6. Utiliza el operador lógico or
console.log(e < a || a < b)
console.log(12 < 25 || 25 > 23)
// 7. Combina ambos operadores lógicos
console.log(a > b || b < e && b < 10)
// 8. Añade alguna negación
console.log(a > e || b > a && e < 35)
// 9. Utiliza el operador ternario
const isNew = true

isNew ? console.log("El producto es nuevo") : console.log("El producto es viejo")
// 10. Combina operadores aritméticos, de comparáción y lógicas
a = 30
b = 25
e = 18

a < b && e > a || b == e ? console.log("Minda rifa") : console.log("Minda hará la gatita") 