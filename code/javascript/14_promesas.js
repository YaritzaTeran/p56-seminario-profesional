function hola(nombre){
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            console.log(`Hola soy${nombre}. `)
            resolve(nombre)
    }, 1000)
})
}
function hablar(){
    return new Promise((resolve, reject) => {
    setTimeout(function(){
         console.log(`bla bla bla. `)
    resolve(nombre)
}, 1000)
    })
    }
    function adios (nombre){
        return new Promise((resolve, reject) => {
        setTimeout(function(){
             console.log(`Adios ${nombre}.`)
        resolve( nombre)
    }, 1000) 
    })
}
console.log (`Inicializando conversacion..`)
hola(`Yaritza`)
.them( ( nombre ) =>hablar( nombre ) )
.them( ( nombre ) =>hablar( nombre ) )
.them( ( nombre ) =>hablar( nombre ) )
.them( ( nombre ) =>hablar( nombre ) )
.them( ( nombre ) => adios(nombre))
.catch( ( error ) => console.error( error ))
