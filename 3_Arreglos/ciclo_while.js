//CICLO WHILE
//Hay que tratar de evitar este ciclo por que si no ponemos bien la condicion podemos trabar la maquina ya que el ciclo no parara 
//TIP: Solucion si trabas una maquina con esto es apagar y volver a encender
//Cuando es bueno ocupar el while? : cuando estemos seguros de que la condicion se cumpla
// let contador = 0

// en la parte  donde esta contador++ podriamos poner contador = contador + 1
// while(contador < 5){
// //codigo que se va a ejecutar mientras el while sea true    
// console.log(contador, "hola")
// contador++
// }

//NOTA: Operador ! Locgical not crea una contradiccion ejemplo
// let estaLLoviendo = false

// console.log(estaLLoviendo) //Me da del valor original que es false

// console.log(!estaLLoviendo) //El ! cambia el valor de falso y ahora me da un verdadero

//CICLO DO WHILE 
//Esta sintaxis mejora la lectura 
//Podemos decir que el do = has esto, y while = mientras se cumpla la condicion
//Es casi lo mismo que el ciclo while solo agrega la parte de do

// let nuevoContador = 0

// do{
// // Se ejecuta el codigo que eta aqui mientras el wwhile sea true
// nuevoContador = nuevoContador + 1
// console.log(nuevoContador)
// } while (nuevoContador < 5) 