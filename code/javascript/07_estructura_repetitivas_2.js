va contador = 0

const avanzar = () => {
    numero=Math.random ()
    console.log (numero)
    resultado = numero < 0.5
    return resultado
}
do{
contador++
} while( !avanzar())

if (contador == 1){
    console.log( `se avanzo ${contador} vez. `)
}else {
    console.log(`se avanzo ${contador} veces.`)
}