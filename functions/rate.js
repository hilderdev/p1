import Rate from '../models/rate';
import Company from '../models/company'
import { resolve } from 'dns';

export const save_rates = (req)=>{
    let resp = {error:false}
    try {
        let new_rate = {rate_value: req.rate_value,company:{_id:req.company}}
        let rate_created = new Rate(new_rate);
        rate_created.save((err)=>{
            (err) && console.log('Rate functions error = ',err) 
            /* Company.rates.push(rate_created);
            Company.save((error)=>{(error) && console.log('Rate functions error = ',err)}); */
        });
        resp.data=rate_created;
        return resp;        
    } catch (error) {
        resp.error = true;
        resp.message = 'Hubo un error al procesar la solicitud intenta mas tarde';
        return resp;
    }
}

export const get_all_rates = async () =>{
    let resp = {error:false};
    try {
        let list = await Rate.find({},{ '_id': 0,'__v': 0}).populate('company',{ '_id': 0,'__v': 0});
        
        resp.data = list;
        return resp;
    } catch (error) {
        resp.error = true;
        resp.message = 'Hubo un error al procesar la solicitud intenta mas tarde';
        console.log('Error en rates functions, error:',error)
        return resp;
    }
}

export const get_last_rate_by_exchange = async () =>{
    let resp = {error:false};
    try {
        let data = await Rate.find({},{ '_id': 0,'__v': 0}).populate('company',{'__v': 0,"rates":0}).sort('-rate_value');
        let list = data.filter((rate,index,self)=>self.findIndex((s) => {return (s.company._id === rate.company._id)}) === index);
        resp.data = list;
        return resp;
    } catch (error) {
        resp.error = true;
        resp.message = 'Hubo un error al procesar la solicitud intenta mas tarde';
        console.log('Error en rates functions, error:',error)
        return resp;
    }
}