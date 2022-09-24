//Crear primero la variable
let nombre 
//Lugo ya asignarle un valor 
nombre = "Dany"

//O crear la variable y ahi mismo asignarle un valor
let nombreUsuario = "Uriel"

//STRINGS
//String palabra
let pais = "Colombia"

//String frase
let fraseSecreta = "Nombre de tu mascota"

//String de letra 
let letra = "c"

//String vacio
let stringVacio = ""
// Tambien se pueden strings con parrafos

//Las VARIABLES se pueden REASIGNAR sin que las declaremos de nuevo

pais = "Mexico"
letra = "q"

//Podemos acceder a la informacion que esta almacenada en las variables ejemplo:
console.log(fraseSecreta)
console.log(nombreUsuario)
console.log(stringVacio)

// NUMBER

let edad
edad = 21

let telefono = 5534110818
let costo = 100
let resultado = -10
let promedio = 9.58

//Nuevamente estas VARIABLES se pueden REASIGNAR sin que las declaremos de nuevo
costo = 80
resultado = 0

//NOTA los numeros tambien pueden ser Strings si yo lo necesito, ejemplo
let numeroCelular = "+55 18 26 98 57"

//CONCATENAR es unir dos o mas Strings o Valores

let info = nombre + pais
console.log(info)

//Concatenar diferentes  valores en este caso Strings

console.log(nombreUsuario + ' ' + letra + ", hola")

//Concatenar diferentes tipos de valores en este caso String + numero
// Al hacerlo sin importar que colocamos primero el numero se vuelve un String

console.log(promedio + nombre)
console.log(nombre + promedio)

console.log("Mi nombre es " + nombre +" y mi promedio es " + promedio)

//Hay otra forma de Concatenar y se llama TEMPLATE STRING

// BOOLEAN

let esHumano = true
let escaneoCompletado = false
let tienePowers = false
let cumpleRequisitos = true
let mexicano = false

//La reasignacion de valores no diferencia  los tipos de dato

esHumano = 100
nombre = true