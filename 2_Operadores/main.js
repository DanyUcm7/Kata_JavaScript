//OPERADORES MATEMATICOS

//Iniciamos con el + PRIMER uso sirve para Concatenar
console.log("yo soy" + " TU PADRE")

//Pero es mejor usar el Template String, que es es coma operador
console.log("yo soy", "tu padre")

//SEGUNDO uso para cambiar el tipo de valor una variable
let noEsUnNumero = "10"
console.log(typeof noEsUnNumero)

//Cambiamos el tipo de valor con el +
let numeroTransformado = +noEsUnNumero
//Confirmamos
console.log(typeof numeroTransformado)

//Si la variable se llama number pero no tiene un valor numerico ejemplo

let number = "pepito"
console.log(+number)  //En la consola me dice que NO es un Numero

//TERCER uso para Sumar
console.log(10 + 30)

//Operador - este solo sirve para RESTAR
console.log(50 - 25)

//Operador de multiplicar * en este ejemplo si cambia el valor de string a numero y los multiplica 
console.log("20" * "5")

//Operador de Division / solo divide, ejemplo
console.log(10 / 2)

//Operador de Residuo de una division
console.log(10 % 2) //El resultado de esto es 0 porque es su residuo


//OPERADORES RELACIONALES nos da como respuesta true o false

let numero1 = 10
let numero2 = 5

console.log(numero1 > numero2)
console.log(numero1 < numero2)

let numero3 = 20
let numero4 = 20
console.log(numero3 >= numero4)
console.log(numero3 <= numero4)

//OPERADOR == igual que PERO en la actualidad es mejor usar el triple igual

let numero5 = 10
let numero6 = "10"
console.log(numero5 == numero6) //Vemos que no diferenecia el hecho de que compara un string con un valor numerico

//Triple igaul ===

let numero7 = 30
let numero8 = "30"
console.log(numero7 === numero8) //Con este vemos que si diferencia los valores qeu esta comparando

//OPERADOR  de distinto que !=
console.log(numero7 !== numero8)

//OPERADOR de Asignacion Matematica
let numerito = 10
console.log(numerito +=2)
//Ejemplo de Template String
console.log(`el nuevo numero es ${numerito}`)

//UNDEFINED la variable esta declarada pero no tiene ningun valor
let saludo
console.log(saludo)

// NULL se asigna a una variable que INTENCIONALMENTE se le da este valor  
let otraVariable = null
console.log(otraVariable)

//OPERADORES LOGICOS
//Operador and &&
let mensajes = true
let noticias = true

console.log(mensajes && noticias)

//Operador or retorna un true si alguna de las condiciones es verdadera 

let mensajen = 0
let numeroDeMensajes = mensajen || "no hay mensajes"

console.log(numeroDeMensajes)

//Declaraciones if / else
//Si la condicion  es verdadera realiza lo que esta entre las llaves si no no realiza nada
//Bloque if
if(10>5){
    console.log("10 es mayor a 5")
}

/*if(condicion){
    //dentro del bloque if y este se ejecuta si la condicon es verdadera
}*/

//Ahora el else
if(10<5){
    console.log("es verdadero")
} else {
    console.log("es falso")
}

//Ejemplo de if else if
let numeron1 = 10
let numeron2 = 20
let numeron3 = 3

if(numeron1 < numeron2){
    console.log(`el numero ${numeron1} es menor al numero ${numeron2}` )
} else if (numeron2 === numeron3){
  console.log(`el numero ${numeron2} es igual al numero ${numeron3}`)
} else {
    console.log(`nada es verdad`)
}

//Valores Falsy
console.log(Boolean(undefinded))
console.log(Boolean(null))
console.log(Boolean(0))
console.log(Boolean(NaN))

//Valores Verdaderos o trhuty
console.log(Boolean(" "))
console.log(Boolean([]))