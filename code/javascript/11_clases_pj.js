function heredaDe(prototipoHijo, prototipoPadre){
    var fn =function () {}
    fn.prototype=prototipoPadre.prototype
    
    //aqui obtengo los prototipos del padre
    prototipoHijo.prototype =new fn
    prototipoHijo.prototype.constructor =prototipoHijo
}
function Persona (nombre,apellido,altura){
    this.nombre=nombre
    this.apellido=apellido
    this.altura=altura
}

function Deportista(nombre,apellido){
    this.nombre =nombre
    this.apellido =apellido
}

Persona.prototype.saludar =function(){
    console.log(`Hola soy ${this.nombre} ${this.apellido}`)

}

Persona.prototype.soyAlto =function(){
    if(this.altura >1.70){
    console.log(`Mi altura es${this.altura} y soy alto.`)
    }else{
        console.log(`Mi altura es ${this.altura} y no soy alto.`)
    }
}
Deportista.prototype.saludar =function(){
    console.log(`Hola soy ${this.nombre} ${this.apellido}`)
}
heredaDe (Deportista, Persona
    )
var objeto1=new Persona (`Yaritza`, `Teran`, 1.60)
objeto1.saludar()
var objeto2=new De[portista] (`Luis`, `Pico`, 1.80)
objeto2.saludar()