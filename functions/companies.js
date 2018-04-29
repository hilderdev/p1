import Company from '../models/company'

export const save_companies = (req)=>{
    let resp = {error:false}
    try {
        let new_companie = {
            name_company: req.name,
            direction_company: req.direction,
            number_compnay: req.number
        }
        let companie_created = new Company(new_companie);
        companie_created.save((err)=>{
            (err) && console.log('Rate functions error = ',err) 
        });
        resp.data=companie_created;
        return resp;        
    } catch (error) {
        resp.error = true;
        resp.message = 'Hubo un error al procesar la solicitud intenta mas tarde';
        return resp;
    }
}

export const get_all_compaines = () =>{
    let resp = {error:false};
    try {
        Company.find({}).populate('rates').exec((err,list_companies)=>{
            (err) && console.log('Company functions error = ',err) 
            console.log(list_companies);
        });
    } catch (error) {
        resp.error = true;
        resp.message = 'Hubo un error al procesar la solicitud intenta mas tarde';
        console.log('Error en companies functions, error:',error)
        return resp;
    }
}