const mongoose = require('mongoose');

const StudentModelSchema = mongoose.Schema(
  {
    name : {
        type : 'string',
        required : true ,
        trim : true
    },
    FatherName : {
        type : 'string',
        required : true ,
        trim : true
    }
});

export default mongoose.model('StudentModel', StudentModelSchema);
