const express = require('express');
const validator = require('validator');

const Router = express.Router();
const Inquiry = require('../model/inquiryModel');


Router.post('/addInquiry',async (req,res)=>{
    try{
    if( !validator.isEmail(req.body.email) ) throw new Error('Invalid Email Address!')
     const inquiry = new Inquiry(req.body);
     await inquiry.save()
     res.status(200).send({ "success" : 'Message Added Successfully!'})
    }
    catch(e){
        res.status(400).send({error:e.message})
    }
})

Router.get('/getInquiries' , async ( req , res )=>{
    try{
        const result = await Inquiry.find();
        res.status(200).send(result)
    
    }
    catch(e){
        res.status(401).send(e)
    }
})

module.exports = Router