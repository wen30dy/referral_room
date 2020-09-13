var express=require('express');
var router=express.Router();
var Openings=require('../models/openings');

router.get('/internal-openings',isLoggedIn,function(req,res){
    Openings.find({},function(err,openings){
        if(err)
            console.log(err);
        else{
            res.render('openings/openings',{opening:openings});
        }
    })
});

router.get('/internal-openings/new',function(req,res){
    res.render('openings/new');
})

router.post('/internal-openings',function(req,res){
 
    var newopening=req.body.opening;
    Openings.create(newopening,function(err,newlycreated){
        if(err)
            console.log(err);
        else
            res.redirect('/internal-openings');    
    })
});

router.get('/internal-openings/:id',function(req,res){
    Openings.findById(req.params.id,function(err,foundopening){
        if(err)
            console.log(err);
        else
            res.render('openings/show',{opening:foundopening})
    })
});

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/signup");
}

module.exports=router;