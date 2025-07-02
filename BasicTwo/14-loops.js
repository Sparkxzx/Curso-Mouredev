// Loops o bucles


// for 

for (let i = 0; i <= 5; i++) {
    console.log(`Hola ${i}`)
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8]


for (let i = 0; i < numbers.length; i++) {
    console.log(`Elemento: ${numbers[i]}`)
}

// While
let i = 0
while (i < 5) {
      console.log(`Hola ${i}`)
      i++
}

/* while(true){
Bucle infinito
} */
let a = "Divición"
console.log(a)
// do while
i = 0
do {
    console.log(`Hola ${i}`)
    i++
} while(i < 5)

// for of una estructura de datos
myArray = [1, 2, 3, 4]
mySet = new Set(["David", "Gomez", "Spark", 26, true, "davis44566@gmail.com"])

myMap = new Map([
    ["name", "David"],
    ["email", "davis44566@gmail.com"],
    ["age", 26]

])
myString = "¡Hola JavaScript!"
for (let valor of myArray){
    console.log(valor)
}

for (let valor of mySet){
    console.log(valor)
}

for (let valor of myMap){
    console.log(valor)
}

for (let valor of myString){
    console.log(valor)
}

// Buenas practicas

//break continue

for (let i = 0; i < 10; i++) {
    if (i == 5){
        continue
    } else if(i == 6){
        break
    }
    console.log(`Hola ${i}`)
}