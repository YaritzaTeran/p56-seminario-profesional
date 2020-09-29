const express = require (`express`)

const router = express.router()

var app= express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(router)

router.get(`/carrera`, function(req,res){
    res.send(`Lista de Carrera de la UPS.`)
})
router.post(`/carrera`, function(req,rest){
    console.log(req.body)
    console.log(req.query)

    res.status(200).send({tipo error:0, mensaje error:'', mensaje exito:'anadido exitosamente'})
})

app.use( `/app` , express.static(`public`))

app.listen(500)
console.log(`La aplicacion esta escuchando en http://localhost:5000`)
