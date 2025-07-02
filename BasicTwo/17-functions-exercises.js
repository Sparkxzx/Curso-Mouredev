/*
Clase 32 - Ejercicios: Funciones
Vídeo: https://youtu.be/1glVfFxj8a4?t=14146
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma
function sum(a, b){
    console.log(a + b)
}

sum(15, 6)
// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
function arrM(arr){
    let max = arr[0]
    for(let i  = 0; i < arr.length; i++){
        if(max < arr[i])
            max = arr[i]
    }
    return[max]
}
let ar = [25, 25, 43, 52, 3, 5, 7]
let mx = arrM(ar)
console.log(`el número mayor de ${ar} es ${mx}`)
// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
function vocals(str){
    const vocals ="aeiouAEIOU"
    let total = 0
    console.log(str.length)
     for (let i = 0; i < str.length; i++){
        if(vocals.indexOf(str[i]) !== -1){
            total++
            
        }
        
    } 
    return total
    
}
let text = "Pau hace el latte muy rico"
let totalV = vocals(text)
console.log(`El número de vocales en "${text}" es: ${totalV}`)
// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
function upper(arr){
   for(let i = 0; i < arr.length; i++){
    arr[i] = arr[i].toUpperCase()
   }
   return arr
}

let arrayNew = ["Minda", "Eliu", "Nancy", "Sebas"]
let array = upper(arrayNew)
console.log(array)

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario
function primi(number){
 
   
    if(number == 1){
        return  false
    } else if (number > 1){
        for(let i = 2; i < number; i++){
            if(number % i == 0){
                return false
            }
    }
    return true
   }
}


console.log(primi(2))
// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares
function par(arr){
   let sumPar = 0
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            sumPar += arr[i] 
        }
        
    }
    return sumPar
}

let arrPar = [1, 23, 4 , 16, 44, 5, 10]
let sumPar = par(arrPar)
console.log(sumPar)
// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado
function cuad(arr){
    const cuads = []
    for(let i = 0; i < arr.length; i++){
        cuads.push(arr[i] * arr[i])
    }
    return cuads
}

let arrCuad = [1, 23, 4 , 16, 44, 5, 10]
let multiCuad = cuad(arrCuad)
console.log(multiCuad)
// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso
function reverse(str){
   rev = ""
   for (let i = str.length - 1; i >= 0; i--){
        rev += str[i] 
   }
   return rev
}

let rever = "Minda y yo irémos hasta el fin del mundo"
let strRev = reverse(rever)
console.log(strRev)
// 10. Crea una función que calcule el factorial de un número dado
function fact(number){
    let factor = 0
    for(let i = 1; i < number.length; i--){
        
    }
}