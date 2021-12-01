//requerimos las dependencias necesrias
const express = require('express') 
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const bodyparser=require('body-parser')

require('./database')

//configurar el puerto
app.set('Port', process.env.PORT || 4000)
app.use(morgan('dev'))
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())
app.use(cors({origen: '*'}))

//rutes
app.use('/admin', require('./routes/Admin.routes'))
app.use('/persona', require('./routes/Persona.routes'))

app.listen(app.get('Port'),()=>{
    console.log("hello I'm the server, escuchando por el puerto: ", app.get('Port'))
})


