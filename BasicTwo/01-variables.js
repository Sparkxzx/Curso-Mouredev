//VAR se puede redefinir pero causa errores si se quiere acceder a la variable sin antes ser asignada
var helloWorld = "¡Hello, JavaScript!"
console.log(helloWorld)

helloWorld = "Me encanta JavaScript"
console.log(helloWorld)

//LET se puede reasignar una variable pero no se puede usar antes de su definición
let helloWorld2 = "¡Hello, JavaScript! hi"
console.log(helloWorld2)
 
helloWorld2 = "JavaScript está bien chidori"
console.log(helloWorld2)

helloWorld2 = "A Minda le gusta JavaScript"
console.log(helloWorld2)
//CONST no se puede reasignar porque es un valor constante
const helloWorld3 = "¡Hi JavaScript!"
console.log(helloWorld3)

/*¨Error
helloWorld3 = "¡Hi my brother!"
console.log(helloWorld3)
*/
