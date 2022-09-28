// Traer un elemento del DOM
// Buscando Etiquetas 
//  Metodos Tradicionales: 

// getElementById() va a buscar un elemento atravez de su Id 
let paginas = document.getElementById("pages") 
//console.log(paginas)

// getElementByClassName() buscara un elemento atraves de su clase

let listaItems = document.getElementsByClassName("item")
//console.log(listaItems) //Podemos ver en la consola los elementos en corchetes[], pero no nos confundamos lo que vemos NO es un arrray

// getElementByTagName() TagName busca por ¿cual es el nombre del tag? trae elementos del tag
// el de arriba y este pueden servir para "ocultar" elementos como dar clic a un boton y que se despliege una lista por ejemplo

let listaItemsByTagName = document.getElementsByTagName("li")
//console.log(listaItemsByTagName)

//Metodos Modernos :

// querySelector nos trae el primer elemento que sea del tipo que estamos buscando 
let pagesQuerySelector = document.querySelector("#pages") //ejemplo usando un id, necesita que le coloquemos el # porque es la sintaxis que le colocamos en css al id
// console.log(pagesQuerySelector)

// querySelectorAll este sirve cuando queremos todos los elementos de un tipo
let itemsQuerySelectorAll = document.querySelectorAll(".item") //En este ejemplo estamos pidiendo todos los items
// console.log(itemsQuerySelectorAll)

//Nota el NODE parece un array, funciona como un array, pero NO es un array

//Creando elementos
// Estos elementos solo se crean en memoria sirven  

// ejemplo de creando un span, el span es para poner textos con interactividad, es de html
let spanTag = document.createElement("span")

spanTag.id = "elemento1"
spanTag.style = "color: red"

// console.log(spanTag)

//Existen metodos para saber si existe un atributo o no 

console.log(spanTag.hasAttribute("name")) //En este caso como no tiene el atributode  name me regresa un false
console.log(spanTag.hasAttribute("id")) //Aqui Si tiene el atributo de id y por eso me regresa un true

//Insertar elementos al DOM 

// Primero Tengo que crear o tener un espacio en el html para ingresar este nuevo elemento en este caso un id (tenemos que anclar ese nuevo elemento)
//En este ejemplo creo una variable con el querySelector para tomar un solo elemento 
let ancla = document.querySelector("#ancla")
console.log(ancla) //aqui checo si lo hice bien aunque no es necesario

ancla.appendChild(spanTag)//Y aqui agrega ese elemento, puedo verlo en inspeccionar en elementos Y EN LA PAGINA PERO NO EN EL HTML

spanTag.innerHTML = "<h1>Devf</h1>" //Esto sirve para agregar codigo html desde JS

//Ahora si queremos REMOVER lo que insertamos desde JS seia asi:

// spanTag.remove()//y se va (lo comento para que no se valla :)



// addEventListener estosirve para escuchar y saber cuando ocurre un evento
//Tipos de eventos: click, doble, etc...
let boton = document.getElementById("boton")
console.log(boton)

boton.addEventListener("click", function(e){ // e es todos los atributos del boton
     alert("Evento desde JS")
})