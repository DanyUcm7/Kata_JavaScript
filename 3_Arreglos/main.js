//Arreglos
let mascotas = ["Coco", "Firulais", "Toby", "Roco" ]

console.log(mascotas)

console.log(mascotas[0])
console.log(mascotas[1])
console.log(mascotas[2])
console.log(mascotas[3])
console.log(mascotas[4])

//Cambiar el nombre por otro de forma individual en el arreglo 
mascotas[2] = "nemo"
console.log(mascotas)

//Una forma de agregar un elemento al arreglo
mascotas[4] = "Duke"
console.log(mascotas)

//Ejemplo de concatenar un string con un elemento del arreglo
console.log("Mi mascota se llama " + mascotas[4])


let calificaciones = [10, 9, 6, 7]

console.log(calificaciones)
console.log(calificaciones[1])

calificaciones[2] = 10
console.log(calificaciones)

//Agregar un elemento en una poscicion lejos si lo hace y tambien crea las demas posiciones pero vacias
calificaciones[7] = 8
console.log(calificaciones)

//Length es una propiedad de los areglos nos dice cuantos elementos tiene dicho array
let frutas = ["Piña", "Sandia", "Pera"]

console.log(frutas.length)

// METODOS de arreglos

//Metodo push agrega un nuevo elemento al final del arreglo
frutas.push("manzana")
console.log(frutas)

//Metodo pop quita un elemento que esta al final
frutas.pop()
console.log(frutas) //Quito "manzana" :c


//Si te piden una "funcion" donde necesites el ultimo elemento de un array

let  verduras = ["lechuga", "aguacate", "elote"]

let ultimoElemnto = verduras.pop()

console.log(ultimoElemnto)

//Metodo UNSHIFT sirve para añadir un nuevo elemento al principio de la lista

let  verduras2 = ["lechuga", "aguacate", "elote"]

verduras2.unshift("Papa")
console.log(verduras2)

//Metodo SPLIT va a crear un array a partir de un objeto iterable 
//iterable  es el que se puede recorrer

let listaSuper = "cebolla, cilantro, jitomate, calabaza"

//Aqui en el parentesis de split coloco el elemento que separa los elementos del string del cual se va hacer un array en este caso una coma
let listaSuperArray = listaSuper.split(",")

console.log(listaSuperArray)

//Metodo SLICE recibe 2 parametros: start y end
//Aqui al ponerle en el parentesis de slice el 1 quiere decir que tome ese array desde el index 1

let frutas3 = ["piña", "sandia", "kiwi", "mango"]
let nuevaLista = frutas3.slice(1)

console.log(nuevaLista) // toma los elementos desde el index 1 que es sandia

//Ahora usando start y end los 2 a la vez
let nuevaLista2 = frutas3.slice(1, 3) //el 1 es se toma desde sandia y el 3 es hasta uno antes de  mango  
console.log(nuevaLista2)

//Metodo SPLICE es para eliminar e insertar  elementos 
//Este metodo no es muy usado por que es "peligroso" 
let colores = ["azul", "rosa", "verde", "morado"]
colores.splice(1, 2, "naranja") //toma el elemento 1 y 2 es decir rosa y verde y los remplaza por naranja

console.log(colores)

//Metodo SORT me acomoda el array por orden alfabetico

let paises = ["Irlanda", "España", "Francia", "Mexico"]
paises.sort()

console.log(paises)

//Pero que pasa si es con numeros y no letras? aqui el ejemplo
//Solo que en este se utiliza algo mas que es el CALLBACK, es una funcion dentro de otra funcion

let numerosmetodo = ["1", "6", "8", "46", "5", "7", "100", "18"]
//El a seria el current = actual y el b seria el next = siguiente
//Entonces esta funcion recorre los elementos comparandolos para poder acomodarlos de menor a mayor
//En este caso toma el primer elemento y lo compara con el segundo y asi y repite hasta acomodarlo todo
let numerosSort = numerosmetodo.sort((a, b) => a - b)
console.log(numerosSort)

//Metodo REVERSE muta el array lo voltea 
let spongebob = ["Patricio", "Bob", "Calamardo", "Gary"]
spongebob.reverse()
console.log(spongebob)

//Metodo CONCAT es juntar o unir diferentes arrays NOTA: ya casi no se usa porque solo puede juntar 2 listas

let personajesMarvel = ["Spiderman", "Wolverine", "Hulk"]
let personajesMarvel2 = ["Iron man", "Capitan America", "Thor"]

let listaPersonajesMarvel = personajesMarvel.concat(personajesMarvel2)

console.log(listaPersonajesMarvel)

//Este se usa mas actualmente:
//Metodo OPERADOR = SPREAD OPERATOR ... es la clave, este  puede juntar mas arrays

let personajesDC = ["Batman", "Superman"]

let listaSuperHeroes = [...personajesMarvel, ...personajesMarvel2, ...personajesDC]
console.log(listaSuperHeroes)
 