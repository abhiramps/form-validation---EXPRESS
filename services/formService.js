const Data = require('../models/Data')

// var details = {};
// var _id="60df284d229b561bd3900600"
const Formdata = (Name, Phone, Email, Password, Message) => {
    const data = new Data({    //it is used to add data to db
        name: Name,
        phone: Phone,
        email: Email,
        password: Password,
        message: Message,
    });
    data.save();
    // _id=data._id;
    // console.log(_id);
    // Data.findById(_id)
    // Name={
    //     "name":Name,
    //     "phone":Phone,
    //     "email":Email,
    //     "password":Password,
    //     "message":Message
    // };
    // details.push({name: Name, phone: Phone, email: Email,password:Password, message: Message })

    // details[Name.name]=Name

    //    DETAILS= {
    //         "name":Name,
    //         "phone":Phone,
    //         "email":Email,
    //         "password":Password,
    //         "message":Message
    //     }
    return { message: " form submitted sucessfully", details: data }
}

const getData = () => {
    return Data.find()
        .then((entireData) => {
        return entireData;
    })
}

const editData=(_id)=>{
  return  Data.findById(_id)
    .then((data)=>{
        return data;
    });
}
const updateForm=(_id,data)=>{
   return Data.findOneAndUpdate({_id},data) 
}

const deleteItem=(id)=>{
  return Data.deleteOne({id});
   
    
}

module.exports = {
    Formdata,
    getData,
    editData,
    updateForm,
    deleteItem
}