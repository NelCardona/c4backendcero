const mongoose = require('mongoose')
URI=('mongodb://localhost/dbnivelacion')

mongoose.connect(URI,{

    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(db=> console.log(
    'Estoy conectado ala base de datos', db.connection.name))
.catch(error=> console.log(error))

//exportar modulos
module.exports = mongoose