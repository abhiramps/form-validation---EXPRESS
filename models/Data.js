var mongoose=require('mongoose');

var data=mongoose.model('formDATAS',{
    name: String,
    phone: Number,
    email: String,
    password: String,
    message: String,
})

module.exports= data;