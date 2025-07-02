/*
Clase 30 - Ejercicios: Bucles
Vídeo: https://youtu.be/1glVfFxj8a4?t=12732
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20
for (i = 1; i <= 20; i++){
    console.log(`Numeros ${i}`)
}
// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
let suma =  0
for (i = 1; i <= 100; i++){
    suma += i
}

console.log("La suma de 1 a 100 es:", suma);
// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
suma = 0

for (i = 1; i <= 50; i++){
    if (i % 2 !== 1){
        console.log(`Pares ${i}`)
    }
}


// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
let names = []

names = ["Isaac", "Pau", "David", "Paulino"]
for(let value of names ){
    console.log(value)
}
// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto

let myString = "parangutirimicuaro el desparangutirimizador"


let vocalCounter = 0
i = 0
const vocals = "aeiouAEIOU"
console.log(myString.length)
while (i < myString.length){
    if(vocals.indexOf(myString[i]) !== -1){
        vocalCounter++
    }
    i++
}
console.log(`la cadena "${myString}" tiene ${vocalCounter} vocales.`)
// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
let multi = []
multi = [24, 53, 6, 3]
let resultado = 1

for(let i = 0; i < multi.length; i++ ){
    resultado *= multi[i]
}
console.log(`El resultado de ${multi} es igual a ${resultado}`)
// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
let resultado5 =  1
let numero = 5
for(let i = 1; i <= 10; i++){
    resultado5 = numero * i;
    console.log(`${numero} * ${i} = ${resultado5}`);
}

// 8. Usa un bucle para invertir una cadena de texto
let key = "Pau hace el latte muy rico"
let reverse = "";
for(i = key.length - 1; i >= 0; i-- ){
    reverse += key[i];
    
}
console.log(reverse)
// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
const fib = [0, 1]

for (i = 2; i <= 10; i++){
    fib.push(fib[i - 1] + fib[i - 2])

    
}

console.log(fib)
// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10
const array = [5, 6, 9, 15, 25, 45, 60, 40]
let array2 = []
for(let i = 0; i <= array.length; i++){
    if(array[i] >= 10){
        array2.push(array[i])
    }
}

console.log(array2)