const PersonaCtrl={}
const Persona = require('../models/Persona.model')

PersonaCtrl.crear=async(req,res)=>{

    const {nombres,apellidos,ciudad,correo,estadoVacuna,dosisAplicadas,ciudad}=req.body
    const NuevaPersona=new Persona({

        nombres,
        apellidos,
        ciudad,
        correo,
        estadoVacuna,
        dosisAplicadas,
        ciudad

    })

    const respuesta = await NuevaPersona.save()
    res.json({

        mensaje: 'Persona creada',
        respuesta
    })

}

module.exports=adminCtrl

