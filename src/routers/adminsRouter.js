const express = require('express')
const addAdminModel = require('../model/addAdmin')
const bcrypt = require('bcrypt')

const router = express.Router()

router.post('/addAdmin' , async (req , res)=>{
    try{
        const admin = addAdminModel(req.body)
        await admin.save()
        res.status(201).send({'success':'Admin added Successfully'})
    }
    catch(e){
        res.status(400).send(e.message)
    }

} )

router.get('/showAdmins' , async (req,res)=>{
    try{
        const result = await addAdminModel.find()
        res.status(200).send(result)
    }
    catch(e){
        res.status(400).send(e)
    }
})

router.post('/deleteUser' , async (req , res)=>{
    try {
        let deletedUser = await addAdminModel.findByIdAndDelete(req.body.id)
        res.status(200).send({"success" : 'user deleted Successfully!'})
    } catch (e) {
        res.status(400).send(e)
    }
} )


router.post('/loginAdmin' , async (req,res)=>{
        try{
            const isUserExist = await addAdminModel.findOne({name:req.body.name})
            if(!isUserExist) throw new Error('invalid name or password')
            let pass = await bcrypt.compare(req.body.password , isUserExist.password)
            if(pass) res.status(201).send({"success":"User logged In successfully!"})
            else throw new Error('invalid name or password')

        }
        catch(e){
            console.log(e)
            res.status(400).send({error : e.message})
        }
    })

module.exports = router