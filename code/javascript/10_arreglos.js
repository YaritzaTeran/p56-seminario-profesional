var objeto1 ={
    nombre:`Carlos`,
    apellido:`Martinez`,
    altura= 1.80,
    cantidadLibros: 20
}
var objeto2 ={
    nombre:`Shirley`,
    apellido:`Coque`,
    altura= 1.70,
    cantidadLibros: 70
}
var objeto3 ={
    nombre:`Javier`,
    apellido:`Ortiz`,
    altura= 1.70,
    cantidadLibros: 50,
}
var objeto4 ={
    nombre:`Guillermo`,
    apellido:`Pizarro`,
    altura= 1.70,
    cantidadLibros: 50,
}
var objeto5 ={
    nombre:`Galo`,
    apellido:`Valverde`,
    altura= 1.60,
    cantidadLibros: 60,
}
var persona=[ objeto1, objeto2, objeto3, objeto4, objeto5]

for (persona of personas){
    console.log (`${personas.nombre} ${personas.apellido}`)
}
console.log (` \n`)

for(var i=0; i<persona.length; i++){
    console.log (`${personas[i].nombre} ${personas[i].apellido}`)
}

const esAlta=(objeto => objeto.altura>=1.70)
var personasAltas=personas.filter(esAlta)

console.log(personasAltas)
for (persona of personasAltas){
    console.log(`${persona.nombre} ${persona.apellido}`)
}

for (persona of personas){
    persona.altura = persona.altura /100
}
console.log(personas)

//const pasarAlturasMetros =(objeto) => {
   // objeto.altura = objeto.altura /100
    //return objeto
//}

var otrasPersonas = []

for (persona of personas){
    otrasPersonas.push({... persona})
}
otrasPersonas.map(pasarAlturasMetros)
console.log (personas)
console.log (otrasPersonas)

//var personasCm =personas.map(function(objeto){
//    objeto.altura =objeto.altura * 100
  //  return objeto
//})
//console.log (personasCm)

var sum =0
for (persona of personas){
    sum += persona.cantidadLibros
}
const contabilizarLibros =(acum, {cantidadLibros}) => acum +cantidadLibros
var totalLibros = personas.reduce (contabilizarLibros, 0)
console.log( `La cantidad de Libros en total es ${totalLibros}`)