// Ejercicios IF-ELSE

// 1. Solicitar al usuario que responda a la pregunta ("¿Eres bellisimo/a?"), en caso de contestar sí, responder "Ciertamente", en caso de contestar no, responder: "No te creo".

//let pregunta = prompt("¿Eres bellisimo? SI/NO")

/*if(pregunta === "SI"){
    console.log("Ciertamente")
} else if (pregunta === "NO"){
    console.log("No te creo")
}*/

// 2. Solicitar al usuario un número, y determinar si es divisible entre dos o no. Mostrando al usuario un mensaje de "x número es divisible entre 2" o "x núm

/*let numero = prompt("Ingresa un numero")
numero = Number(numero)

if (numero %2 === 0){
    console.log(`${numero} es divisible entre 2`) //NOTA concatenar con Template string `${}`
} else {
    console.log(`${numero} No es divisible entre 2`)
}*/

// 3. Crear un programa que determine si un número introducido en un Prompt es par o no, la respuesta será mostrada en un Alert.



// 4. Solicitar al usuario un número de cliente. Si el número es el 1000, imprimir "Ganaste un premio", en caso contrario mostrar el número y el mensaje "Lo sentimos, sigue participando".

/*let numeroUsuario = prompt("Dame un numero")
numeroUsuario = Number(numeroUsuario)

if (numeroUsuario === 1000){
    console.log("Ganaste un premio")
} else {
    console.log("Lo sentimos sigue participando")
}*/


// 5. Solicitar al usuario que ingrese dos números y mostrar cuál de los dos es menor. No considerar el caso en que ambos números son iguales.

/*let numero1 = prompt("Dame un numero")
numero1 = Number(numero1)

let numero2 = prompt("Dame  otro numero")
numero2 = Number(numero2)

if (numero1 < numero2){
    console.log(numero1 + " es menor que " + numero2)
} else if (numero2 < numero1){
    console.log(numero2 + " es menor que " + numero1)
}*/

// 10. Un conocido portal de educación en tecnología está ofreciendo programas para aprender a desarrollar aplicaciones. Escribe un programa que le indique a la persona interesada cuánto deberá pagar mensualmente de acuerdo a la opción elegida.
// El programa educativo contempla 3 diferentes niveles, cada uno con su costo mensual:
// Course: $4999 MXN
// Carrera $3999 MXN
// Master: $2999 MXN

let nivel = prompt('Qué nivel de curso estás tomando? Course/Carrera/Master')

// Adicionalmente preguntar si cuenta con alguna beca y aplicar el descuento correspondiente al precio final.
// Beca Facebook: 20% de descuento.
// Beca Google: 15% de descuento.
// Beca Jesua: 50% de descuento.

let beca = prompt('Cuentas con alguna beca? Fb/Google/Jesua/No')
let descuento = 0
if (beca === 'Fb') {
    descuento = 20
} else if (beca === 'Google') {
    descuento = 15;
} else if (beca === 'Jesua') {
    descuento = 50
}

// Finalmente, además del precio mensual con descuento, indicar al usuario cuánto gastaría en total por el curso elegido, tomando en cuenta las siguientes duraciones:
// Course: 2 meses
// Carrera 6 meses
// Master 12 meses

if(nivel === 'Course') {
     mensualidad = 4999 - 4999*descuento/100
     totalCurso = mensualidad*2
   } else if (nivel === 'Carrera') {
        mensualidad = 3999 - 3999*descuento/100
        totalCurso = mensualidad*6
   } else if (nivel === 'Master') {
        mensualidad = 2999 - 2999*descuento/100
        totalCurso = mensualidad*12
   }
   
   console.log(`Tu curso es ${nivel} y pagarás una mensualidad de $${mensualidad} y un total de $${totalCurso}`)
