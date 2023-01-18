const mongoose = require('mongoose');

const InquirySchema = mongoose.Schema({
    name :{
        type : 'string',
        required : true ,
        trim : true
    } , 
    email : {
        type : 'string' ,
        required : true,
        trim:true
    },
    message : {
        type : 'string',
        required : true , 
        trim :  true
    } 
}) 

const  Inquiry = mongoose.model('Inquiries' , InquirySchema );

module.exports = Inquiry