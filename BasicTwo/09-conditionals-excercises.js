/*
Clase 24 - Ejercicios: Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=8652
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
let name = "Pau"

if (name == "Pau"){
    console.log("Se llama Pau")
}else{
    console.log("No se llama Pau")
}
// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
let user  = "pau234"
let password = "123456"

if (user == "pau234" && password == "123456"){
    console.log("La contraseña y el usuario son correctos")
}else{
    console.log("La contraseña y el usuario no son correctos")
}
// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let num = 22

if (num == 22){
    console.log("Pau tiene 22 años la chiquilla")
}else if (num < 22){
    console.log("No es la edad de Pau")
}else{

}
// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
let age = 22
let minAge = 18
if (age >= minAge){
    console.log("Pau puede votar")
}else if (age <= minAge){
    console.log(`le faltan, ${minAge - age}  Años`)
}
// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 
const message = age >= minAge ? "Pau es mayor" : "Pau es menor"
console.log(message)
// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
let mes = 11

if (mes >= 2 && mes <= 4){
    console.log("Estamos en primavera")
}else if(mes >= 5 && mes <= 7){
    console.log("Estamos en Verano")
}else if(mes >= 8 && mes <= 10){
    console.log("Estamos en Otoño")
}else if(mes >= 0 && mes <= 1 || mes == 11){
    console.log("Estamos en invierno")
}else{
    console.log("No es un mes valido")
}
// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
mes = 11
if (mes === 0 || mes === 2 || mes === 4 || mes === 6 || mes === 7 || mes ===  9 || mes === 11){
    console.log("Este mes tiene 31 días")
}else if (mes === 3|| mes === 5 || mes === 8 || mes === 10){
    console.log("Este mes tiene 30 días")
}else if (mes === 1){
    console.log("Este més tiene 28 días")
}else{
    console.log("No es un mes del año")
}
// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
let languaje = 1
let grettings
switch(languaje){
    case 0:
        grettings = "¡Hola Pau!"
        break
    case 1:
        grettings = "¡Hi Pau!"
        break
    case 2:
        grettings = "¡Bonjour Pau!"
        break
    case 3:
        grettings = "¡Ciao Pau!"
        break
    default: 
        grettings = "No es un lenguaje valido"
}

console.log(`${grettings}, ¿Cómo te encuentras?`)
// 9. Usa un switch para hacer de nuevo el ejercicio 6
mes = 8
let dayMonth
 switch (mes){
    case 0:
        dayMonth = "Enero, estamos en invierno"
        break
    case 1:
        dayMonth = "Febrero, estamos en invierno"
        break
    case 2:
        dayMonth = "Marzo, estamos en primavera"
        break
    case 3:
        dayMonth = "Abril, estamos en primavera"
        break
    case 4:
        dayMonth = "Mayo, estamos en primavera"
        break
    case 5:
        dayMonth = "Junio, estamos en verano"
        break
    case 6:
        dayMonth = "Julio, estamos en verano"
        break
    case 7:
        dayMonth = "Agosto, estamos en verano"
        break
    case 8:
        dayMonth = "Septiembre, estamos en otoño"
        break
    case 9:
        dayMonth = "Octubre, estamos en otoño"
        break
    case 10:
        dayMonth = "Noviembre, estamos en otoño"
        break
    case 11:
        dayMonth = "Diciembre, estamos en invierno"
        break
    default:
        dayMonth = "No es un mes valido" 
 }

 console.log(dayMonth)
// 10. Usa un switch para hacer de nuevo el ejercicio 7
mes = 8
let daysMonth
 switch (mes){
    case 0:
        daysMonth = "Enero, este mes tiene 31 días"
        break
    case 1:
        daysMonth = "Febrero, este menos tiene 28 días"
        break
    case 2:
        daysMonth = "Marzo, este mes tiene 31 días"
        break
    case 3:
        daysMonth = "Abril, este mes tiene 30 días"
        break
    case 4:
        daysMonth = "Mayo, este mes tiene 31 días"
        break
    case 5:
        daysMonth = "Junio, este mes tiene 30 días"
        break
    case 6:
        daysMonth = "Julio, este mes tiene 31 días"
        break
    case 7:
        daysMonth = "Agosto, este mes tiene 31 días"
        break
    case 8:
        daysMonth = "Septiembre, este mes tiene 30 días"
        break
    case 9:
        daysMonth = "Octubre, este mes tiene 31 días"
        break
    case 10:
        daysMonth = "Noviembre, este mes tiene 30 días"
        break
    case 11:
        daysMonth = "Diciembre, este mes tiene 31 días"
        break
    default:
        daysMonth = "No es un mes valido" 
 }

 console.log(dayMonth)
//11. Nuevo ejercicio
name = "Pau Pau"
let name2 = "David"
let coffee = "Moka"
let coffee2 = "Te chai"
if(name2 == "David"){
    console.log(`${name}, le preparara un ${coffee} a ${name2} `)
}else if(name2 == "Nancy"){
    console.log(`${name}, le preparara un ${coffee2} a Nancy`)
}else{
    console.log(`${name}, atendera al cliente` )
}