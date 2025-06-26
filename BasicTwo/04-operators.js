// Operadores

// Operadores Aritméticos
let a = 5// variables para guardar datos aritmeticos
let b = 10
console.log(a + b)//suma
console.log(a - b)//Resta
console.log(a * b)//Multiplicación
console.log(a / b)//División

console.log(a % b)// Módulo es el resto de la división
console.log(a ** b)// Exponente

a++ //Inncremento
console.log(a)

b--// Decremento
console.log(b)

//Operadores de asignación

let myVariable = 2
console.log(myVariable)
myVariable += 2
console.log(myVariable)

myVariable += 2
myVariable -= 2
myVariable *= 2
myVariable /= 2
myVariable %= 2
myVariable **= 2

//Operadores de comparación
console.log(a)

console.log(a > b)
console.log(a < b)
console.log(a >= b)
console.log(a <= b)
console.log(a == b)//igualdad por valor
console.log(a =="6")//igualdad por valor
console.log(a == a)
console.log(a === a)//igualdad por identidad (por tipo y valor)
console.log(a === 6)
console.log(a === "6")
console.log(a != 6)// Negación
console.log(a !=="6")
console.log(0 == false)
console.log(1 == false)
console.log(2 == false)
console.log(0 == "")
console.log(0 == " ")
console.log(0 == '')
console.log(0 == "Hola")
console.log(0 === "")
console.log(undefined == null)
console.log(undefined === null)

/*
Truthly values (valores verdaderos)

- Todos los numeros positivos y negativos menos el cero
- Todas las cadenas de texto menos las vacías
- El boolean true
*/

/*
Falsy values (valores falsos)

- 0
-  0n
- null
- undefined
- NaN (Not a Number)
- El boolean false
- Cadenas de texto vacías 
*/

// Operadores lógicos

//and (&&)
console.log(5 > 10 && 15 > 20)
console.log(5 < 10 && 15 < 20)
console.log(5 < 10 && 15 > 20)
console.log(5 > 10 && 15 > 20 && 30 > 40)

// or (||)

console.log(5 > 10 || 15 > 20)
console.log(5 < 10 || 15 < 20)
console.log(5 < 10 || 15 > 20)
console.log(5 > 10 || 15 > 20 || 30 > 40)

console.log(5 > 10 && 15 > 20 || 30 < 40)

//not (!)
console.log(!(true))
console.log(!(false))
console.log(!(5 > 10 && 15 > 20))
console.log(!(5 < 10 || 15 < 20))

//Operadores ternarios

const isRaining = true

isRaining ? console.log("Está lloviendo") : console.log("No está lloviendo")
