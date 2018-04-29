import mongosse from 'mongoose';

const Schema = mongosse.Schema;

const SchemaCompany = new Schema({
    name_company: {type:String},
    direction_company: {type:String},
    number_compnay: {type:String},
    create_date: {type:Date,default:Date.now},
    rates:[{type:mongosse.Schema.Types.ObjectId,ref:'Rate'}]
});
/* 
SchemaCompany.virtual('rates',{
    ref: 'Rate',
    localField: '_id',
    foreignField: 'company'
}); */

const Company = mongosse.model('Company',SchemaCompany);

module.exports = Company;