const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')

const addAdminSchema = mongoose.Schema({
    name : {
        type : 'string',
        required : true ,
        trim : true,
        unique : true
    },
    password : {
        type : 'string' , 
        required : true ,
        trim : true
    }
})


addAdminSchema.post('save', function(error, doc, next) {
    if (error.name === 'MongoServerError' && error.code === 11000) {
      next( new Error( JSON.stringify({success:"user with this name already exist!"})));
    } else {
      next();
    }
  });


addAdminSchema.methods.toJSON = function(){
    const user=this
    const userObject =user.toObject()
    delete userObject.password

    return userObject
}

// addAdminSchema.method.createToken = async function(){
//         let user = this
//         const token = jwt.sign({_id:user._id.toString()},'adminloginandsiguup')
//         user.tokens = user.tokens.concat({token})
//         await user.save()
//         return {token}
// }

addAdminSchema.pre('save' , async function(next){
    const user = this
    if(user.isModified('password')){
        user.password = await bcrypt.hash(user.password , 8)
        next()
    }
})

const addAdminModel = mongoose.model('Admins' , addAdminSchema);
module.exports = addAdminModel 