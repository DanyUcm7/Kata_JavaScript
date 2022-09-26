//CICLO FOR
//el punto y coma ; es importante forma parte de el ciclo
//el i++ funciona cuando se ejectue el codigo la variable i la va a incrementar en 1, luego + 1 y asi
//En este ejemplo el codigo se va a ejecutar hasta que la variable i sea menor a 10 en este caso 9
// let contador = 0
// for(let i = 1; i < 10; i++){
//    //codigo que se va a estar ejecutando cuando usamos el for 
// contador = contador +1
// console.log(contador, "Soy el contador")
// }

//CICLO FOR  en un array

let frutas =["uva", "sandia", "piña", "manzana"]

// for (let index = 0; index < frutas.length; index++){
//     console.log(index)
//     console.log(frutas[index])
// }

//FOR OF de un array es mas abreviado
//Este ejemplo da el mismo resultado que el anterior for

for (fruta of frutas){
    console.log(fruta)
}
