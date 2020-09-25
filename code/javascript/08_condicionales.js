var persona ={
    nombre: `Jordan`,
    apellido:'Hermida',
    edad: 25,
    universidad: 'Universidad Politecnica Salesiana',
    correoEelectronico: `jhermida@est.ups.edu.ec`,
    ingeniero:true,
    master: false,
    doctor: false,
}

function imprimirPersona(objeto){
    console.log(`${objeto.nombre} ${objeto.apellido}`)
    console.log(`Edad: ${objeto.edad} anos. `)
    console.log(`Universidad: ${objeto.universdad}  `)
    console.log(`CorreoElectronico: ${objeto.correoEelectronico}  `)
  if(objeto.master){
      console.log(`Es Ingeniero. `)
  }
  if(objeto.master){
      console.log(`Es Magister. `)
  }
  if(objeto.doctor){
      console.log (`Es Doctor. `)
  }
}

opcion = 2
switch(opcion) {
    case 1:
        console.log(`caso 1`)
        break
    case 2:
        console.log(`caso 2`)
        break
}

imprimirPersona(persona)