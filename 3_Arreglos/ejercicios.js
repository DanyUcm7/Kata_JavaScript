// Paco hizo travesuras en el salón y la maestra lo castigó, para poder salir tiene escribir en el pizarrón todos los números pares  del 1 al 100, ¿puedes ayudarle a Paco a hacer un algoritmo que haga esto por el?

// function numerosPares(){
//     for(let i = 2; i <= 100; i+=2)
//     console.log((i))
// }

// numerosPares()

// Escribir todos los números que terminan en 0 y estén entre 2 y 121

function numerosCerrados(){
    for(let i = 10; i < 121; i+=10)
         console.log((i))
}

numerosCerrados()

// Extra
// Joel lleva 5 materias, el quiere saber su promedio al recibir sus calificaciones,// ¿podrías ayudarle a crear un algoritmo que haga eso por el?

let calificaciones = [10, 6, 8, 9, 10]

let sumaCalificaiones = 0 
for(i = 0; i < calificaciones.length; i++){
//La i que esta en calificaciones[1] vale igual que los numeros del array primero 10 y al ultimo 10   
//Y se va sumando 10 + 6 + 8 + 9 + 10 hasta que la condicion se cumple 
    sumaCalificaiones = sumaCalificaiones + calificaciones[i]
}
//en el console concatenamos un srting con el promedio por medio de TEMPLATE STRING
console.log(`el promedio de Joel es: ${sumaCalificaiones / calificaciones.length}`)

// Ejercicios de Funciones

//  Hacer una función que convierta pesos a dólares (esta la tengo en Runkit)

// let valorPeso = .050

// function pesoADolares(a, valorPeso){
//    let conversion = a * valorPeso
//    console.log(conversion)
//    return conversion
// }

// pesoADolares(20, valorPeso)


//  Hacer una función que cuente el número de caracteres de una palabra (Esta funcion tambien la tengo en Runkit)

function contadorDeLetras (palabra){
//Para JavaScript una palabra es un string y un string es un objeto iterable    
    let numeroDeLetras = palabra.length
    return numeroDeLetras
}
console.log(contadorDeLetras("Jabon"))//El console no es necesario lo pongo para verlo en la consola el numero de letras de Jabon es 5


// Hacer una función que halle el numero mayor entre dos números (Tengo este ej en Runkit)

function numeroMaximo (a, b){
 if (a < b ){
    respuesta = `${b} es mayor que ${a}` //estamos concatenando valores con Template string
    return respuesta
 } else if (a > b) {
    respuesta = a + " es mayor que " + b //Aqui concatenamos sencillo con el +
    return respuesta
 }
}

console.log(numeroMaximo(10, 9))
console.log(numeroMaximo(1, 7))


//  Hacer una función que calcule el IVA de una cantidad (16%)


//  Hacer una función para ingresar cualquier letra del alfabeto  
//  y verifique si es vocal o consonante

//  Hacer una función que verifique si un número es positivo o negativo


//  Hacer una función que halle la suma de todos los números naturales entre 1 y n


//  Hacer una función que imprima una pirámide de asteriscos como la siguiente:

// '*'
// '**'
// '***'
// '****'
// '*****'
// '******'
// '*******'
// '********'

// EXTRA pasando una altura a la funcion crea la piramide segun ese alto: 

// //              0        *        vuelta * 2 + 1
// //              1       ***
// //              2      *****
// //              3     *******
// //              4    *********



// Crea un programa que pregunte al usuario un número. Usando el archivo de arreglo de Pokémons, mostrar solo los nombres de los Pokémons cuyos números que son múltiplos de 5 desde 1 hasta el número introducido por el usuario. 
// https://pastebin.com/Zzk8g7Z6



// Crea un programa que recorra el arreglo [4,”dos”,8,”tres”,5,9,1,”cero”] y muestre en consola solo los elementos que son tipo número.