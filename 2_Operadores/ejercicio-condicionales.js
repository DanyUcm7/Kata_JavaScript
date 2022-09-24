//Ejercico de Demostracion ¿Puedo vacunarme?
//Si tengo + de 18 años 
//Si estoy embarazada
//Si tengo mas de 30 años
console.log("Condicionales")

let edad = prompt("Ingresa tu edad")
edad = Number(edad)
let locacion =  ""
let genero = ""

if (edad >= 18){
   locacion = prompt("¿Resides en un municipio fronterizo? Si/No")
   genero = prompt("¿Cual es tu genero? H/M")
}


let embarazo = ""
if (genero === "M" && edad >= 18){
   embarazo = prompt("¿Estas embarazada Si/No")
}

//Definir si de acuerdo a las variables si puedes ser vacunado o no
//Nota el simbolito ! que esta al lado de embarazo sirve para negar o ignorar lo que este en esa variable es decir que no la tome en cuenta 
if(edad >= 30 && !embarazo){
    console.log("Mayor de 30 Si te puedes vacunar")
} else if (edad >= 18 && genero === "M" && embarazo === "Si") {
    console.log("Embarazada SI puedes vacunarte")
} else if (edad >= 18 && locacion === "Si") {
    console.log("18 años o + y eres Fronterio SI puedes vacunarte")
} else {
    console.log("No hay vacunas para ti")
}