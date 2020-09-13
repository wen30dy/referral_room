var express=require('express');
var router=express.Router();
var Jobs=require('../models/job');

router.get('/jobs',function(req,res){
    Jobs.find({},function(err,jobs){
        if(err)
            console.log(err);
        else{
            res.render('jobs/jobs',{jobs:jobs});
        }
    })
    
});

router.get('/jobs/new',function(req,res){
    res.render('jobs/new');
})

router.post('/jobs',function(req,res){
 
    var newJob=req.body.job;
    Jobs.create(newJob,function(err,newlycreated){
        if(err)
            console.log(err);
        else
            res.redirect('/jobs');    
    })
});

router.get('/jobs/:id',function(req,res){
    Jobs.findById(req.params.id,function(err,foundJob){
        if(err)
            console.log(err);
        else
            res.render('jobs/show',{job:foundJob})
    })
});

module.exports=router;