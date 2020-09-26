async function hola(nombre){
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            console.log(`Hola soy${nombre}. `)
            resolve(nombre)
    }, 1000)
})
}
async function hablar(){
    return new Promise((resolve, reject) => {
    setTimeout(function(){
         console.log(`bla bla bla. `)
    resolve(nombre)
}, 1000)
    })
    }
async function adios (nombre){
        return new Promise((resolve, reject) => {
        setTimeout(function(){
             console.log(`Adios ${nombre}.`)
        resolve( nombre)
    }, 1000) 
    })
}
async function dialogar(){
    let nombre=hola (`Yaritza`)
    await hablar()
    await hablar()
    await hablar()
    await hablar()
    await adios( nombre )
}
console.log (`Inicializando conversacion...`)
dialogar()