import Express from 'express'
import {save_rates,get_all_rates,get_last_rate_by_exchange} from '../functions/rate'
import {save_companies,get_all_compaines} from '../functions/companies'
const router = Express.Router()

//Rate routes

// All rates
router.get('/rates',async (req,res)=>{
    try {
        const resp = await get_all_rates();
        res.send(resp)
    } catch (error) {
        res.send({
            error:true,
            message: 'Ha ocurrido error en conexion, intente luego'
        })
    }
})
// last rate per exchange
router.get('/lastrates',async (req,res)=>{
    try {
        const resp = await get_last_rate_by_exchange();
        res.send(resp)
    } catch (error) {
        res.send({
            error:true,
            message: 'Ha ocurrido error en conexion, intente luego'
        })
    }
})
// New rate
router.post('/rates', (req,res)=>{
    try {
        if(Object.keys(req.body).length > 0){
            const resp = save_rates(req.body);
            res.send(resp)
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

//All companies
router.get('/companies',(req,res)=>{
    try {
        const resp = get_all_compaines();
        res.send(resp)
    } catch (error) {
        res.send({
            error:true,
            message: 'Ha ocurrido error en conexion, intente luego'
        })
    }
})
//New company
router.post('/companies',(req,res)=>{
    try {
        if(Object.keys(req.body).length > 0){
            const resp = save_companies(req.body);
            res.send(resp)
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
export default router;