var nombreApellido = 'Yaritza Teran'
var edad = 24

//funcion tipo declarativa
function imprimirEdad(nombre, edad) {
 console.log( `${nombreApellido} tiene la edad de ${edad}.` )

}

//funcion tipo flecha
var imprimirEdad2 =(nobre, edad) => {
    console.log( `${nombre} tiene la edad de ${edad}.` )
 }

 //funcion tipo expresiva
 var imprimirEdad3 = function(nobre, edad) {
    console.log( `${nombre} tiene la edad de ${edad}.` )

imprimirEdad ( nombreApellido. edad)
imprimirEdad( 'Rommel Cueva', 19)
imprimirEdad2 ( nombreApellido. edad)
imprimirEdad3( 'Martha Terranova', 50 )
