var express = require('express');
var router = express.Router();
var formservice=require('../services/formService')

// const Data =require('../models/Data')

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.post('/forms',(req,res)=>{
let name=req.body.Name;
let phone=parseInt(req.body.Phone);
let email =req.body.Email;
let password=req.body.Password;
let msg=req.body.Message;
let result= formservice.Formdata(name,phone,email,password,msg)
res.send(result);
// console.log(result)
}) 


router.get('/data',(req,res)=>{
  formservice.getData()
  .then((entireData)=>{
    // console.log(entireData)
    res.send({message:"data fetched sucessfully",data:entireData})
  })
})

router.get('/data/:id',(req,res)=>{
  formservice.editData(req.params.id)
  .then((data)=>{
    res.send(data);
  })
})

router.patch("/data/:id",(req,res)=>{
  formservice.updateForm(req.params.id,req.body)
  .then((result)=>{
    res.send({message:"form updated sucessfully"})
  })
})

router.delete('/data/:id',(req,res)=>{
  formservice.deleteItem(req.params.id)
  .then((result)=>{
    res.send({message:"item deleted sucessfully" ,item:result})
  },(error)=>{
    console.log(error)
  })
})
module.exports = router;