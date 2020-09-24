var estudiante1={
    nombre: 'Yaritza',
    apellido: 'Teran',
    universidad: 'Universidad politecnica Salesiana',
    correo_electronico: 'yterant@est.ups.edu.ec',
}

var estudiante2={
    nombre: 'Katherin',
    apellido: 'Loor',
    universidad: 'Universidad politecnica Salesiana',
    correo_electronico: 'kloorp1@est.ups.edu.ec',
}

function imprimirNombreMayuscula(objeto){
    var {nombre }= objeto
    console.log( `${nombre.toUpperCase()} ${objet.apellido}`)
}
    function imprimirNombreMinuscula(objeto){
        console.log( `${objeto.nombre.toLowerCase()} ${objet.apellido}`)

}
function imprimirApellidoMayuscula({apellido}){
    console.log( `${apellido.toUpperCase()}`)
}
imprimirNombreMayuscula(estudiante1)
imprimirNombreMinuscula(estudiante1)