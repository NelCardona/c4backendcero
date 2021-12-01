const {Router}=require('express')
const router = Router()
const PersonaCtrl=require('../controller/Persona.controler')


router.post('/crear', PersonaCtrl.crear)


module.exports = router