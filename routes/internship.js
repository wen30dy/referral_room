var express=require('express');
var router=express.Router();
var Internship=require('../models/internship');

router.get('/internship',function(req,res){
    Internship.find({},function(err,internship){
        if(err)
            console.log(err);
        else{
            res.render('internship/internship',{internship:internship});
        }
    })
});

router.get('/internship/new',function(req,res){
    res.render('internship/new');
})

router.post('/internship',function(req,res){
 
    var newInternship=req.body.internship;
    Internship.create(newInternship,function(err,newlycreated){
        if(err)
            console.log(err);
        else
            res.redirect('/internship');    
    })
});

router.get('/internship/:id',function(req,res){
    Internship.findById(req.params.id,function(err,foundInternship){
        if(err)
            console.log(err);
        else
            res.render('internship/show',{internship:foundInternship})
    })
});

module.exports=router;