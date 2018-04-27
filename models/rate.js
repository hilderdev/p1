import mongosse from 'mongoose';

const Schema = mongosse.Schema;

const SchemaRate = new Schema({
    rate_created: {type:Date,default:Date.now},
    rate_value: {type:Number}
});

const Rate = mongosse.model('Rate',SchemaRate);

module.exports = Rate;