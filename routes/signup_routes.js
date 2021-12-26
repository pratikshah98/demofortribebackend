var express=require('express');
var user=require('../model/signup_model');
var router=express.Router();


router.post('/',(req,res)=>{
    let usermodel=new user(req.body);
    usermodel.save()
    .then(doc=>{
        res.send(doc);
    })
    .catch(err=>{
        res.send(err);
    })
});

module.exports=router;