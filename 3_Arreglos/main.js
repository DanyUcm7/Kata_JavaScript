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
