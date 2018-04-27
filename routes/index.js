import Express from 'express'
import {save_rates} from '../functions/rate'
const router = Express.Router()

//Rate routes

// All rates
router.get('/rates',(req,res)=>{
    res.json({
        success: true,
        data: {
            rates: [1,2,3,4,5,6]
        }
    })
})
//New rate
router.post('/rates',(req,res)=>{
    try {
        if(Object.keys(req.body).length > 0){
            const resp = save_rates(req.body);
            res.send({
                error:false,
                data: resp
            })
        }else{
            res.send({
                error:true,
                message: 'La solicitud no puede ser entregada sin datos en la peticion'
            })
        }
    } catch (error) {
        res.send({
            error:true,
            message: 'Ha ocurrido error en conexion, intente luego'
        })
    }
})

//Companies routes
router.get('/companies',(req,res)=>{
    res.json({
        success: true,
        data: {
            compaines: [1,2,3,4,5]
        }
    })
})

export default router;