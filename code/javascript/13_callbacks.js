function hola(nombre, fn_cb){
setTimeout(function(){
    console.log(`Hola soy ${nombre}. `)
    fn_cb(nombre)
}, 1000)
}
function hablar(fn_cb){
    setTimeout(function(){
        console.log(`bla bla bla. `)
        fn_cb()
    }, 1000)  
    }
    function adios(nombre){
        console.log(`!Adios ${nombre}! `)
    }
function dialogar(nombre, numVeces){
    if(numVeces > 0){
        hablar(function(){
            dialogar( nombre, --numVeces)
    })
}else {
    adios(nombre)
    console.log(`Finalizando conversacion`)
}
}
console.log(`Inicializando conversacion..`)
hola(`Yaritza`, function(nombre){
    dialogar(nombre, 4)
})
