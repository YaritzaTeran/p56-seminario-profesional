let persona= {
    nombres: 'Melisa Nicole',
    apellido: 'Terranova Freire',
    peso: 147,

}

const INCREMENTAR_PESO = 3
const DECREMENTAR_PESO = 2

cont aumentarPeso = ( objeto ) => objeto.peso += INCREMENTAR_PESO
cont disminyePeso = ( objeto ) => objeto.peso -= DECREMENTAR_PESO

const comeMucho = () => Math.random() <0.5
cont realizaDeporte =() => Math.random () <0.7

const META= estudiante.peso -10

while(persona.peso > meta) {
if (comeMucho()) {
aumentarPeso( persona)
}
if(realizaDeporte()){
disminuyePeso(persona)
}
}
console.log ( `al final del año ${persona.nombres} pesa ${persona.peso}. `)
