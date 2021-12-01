const mongoose = require('mongoose')
const Schema = mongoose.Schema


const VacunadosShema = new Schema({

    nombres: {type:String, require:[true, 'Nombre Obligatorio']},
    apellidos:String,
    ciudad:String,
    correo:String,
    estadoVacuna:String,
    dosisAplicadas:String,
    ciudad:String,
    date:{type:Date,default:Date.now}
})