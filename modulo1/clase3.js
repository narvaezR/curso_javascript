//datos nulos e indefinidas
const constanteNula = null
var constanteIndefinida = undefined
//Modificadores de listas 
var lista1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 
//agregar un elemento a una lista 
lista1.push(11)
console.log(lista)
//sacar un elemento de una lista 
lista1.pop()
console.log(lista1)
//modificadores booleanos 
var verdadera = true
var falsa = false
verdadera = !verdadera
falsa = !falsa
//objetos en javascritp 
var persona = {
    Nombre: "Ricardo Narvaez",
    edad: 22,
    nacionalidad: "Colombiano",
    colorPreferido: "Negro"
}
//modificadores de obejtos en Js
//imprimir propiedades de un objeto 
console.log(persona.Nombre)
//Guardar 
const NombrePersona = persona.Nombre
console.log(NombrePersona)
// agregar más propiedades a un objeto 
persona.comidadPreferida = "Hamburguesa"
console.log(persona)
//eliminar una propiedad de un objeto 
delete persona.edad
console.log (persona)
//COMPARADORES 
//Mayor y menor que
4>3
4<3
//igual 
       // el = esta asignado para las variables y constantes, en comparadores se utiliza 3 = (===) 
4 === 4
"hola" ==== "hola"
true === true
true === false
true === !false 
// diferencia 
 4 !== 3 
 4 !== 4
          // funciona con textos, boleans, nulls 

//OPERADORES LÓGICOS 
// And (y) &&
// para que un And sea verdadero true los valores de verdad que tiene a su derecha
//verdaderos 
true && true // true 
// Or | ó
// para que un Or sea verdadero alguno de los valores a su izquierda o derecha deben ser verdaderos 
true || true
true || false 
false || false 
true || true || false 

// combinar 

4 > 3 || 5<2




