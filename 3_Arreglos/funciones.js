function Suma(a, b){
    let suma = a + b
    console.log(suma) //El conole.log lo puse para poder ver el resultado en la consola pero no es necesario 
//Con return la funcion nos dara un valor de salida
    return suma    
}

Suma(10, 30)

//SCOPE 
//Hay 2 un scope local es cuando una variable esta definida dentro de un bloque o llaves
//para ver el contenido de esta variable con un console necesito declarar ese console igual adentro
//lo que este en un ambito local no lo puedo ver en un ambito global
{
    let pandita = "limon"
    console.log(pandita)
}
//scope global 
//es cuando una variable esta fuera de llaves
//puedo acceder o usar su valor de forma mas facil, lo que este en un ambito global si lo podemos ver en un ambito local
let pandita2 = "naranja"
console.log(pandita2)
