var apellido = 'Teran'
var nombre = 'Yaritza' , apellido = 'Teran'

var nombreMayusculas = nombre.toUpperCase()
var apellidoMayusculas = apellido.toUpperCase()

//javasript puro
console.log ( nombreMayusculas + ' ' + apellidoMayusculas )
// especificacion de javascript - EcmaScript + 6
console.log ( `${nombre} ${apellidoMayusculas}`)

var primeraLetraNombre = nombre.charAt(0)
var longitudNombre = nombre.length
var subcadenaNombre = nombre.substr(1, 3)

console.log( primeraLetraNombre)
console.log( longitudNombre )
console.log( subcadenaNombre )
