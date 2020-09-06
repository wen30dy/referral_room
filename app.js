var express=require('express'),
    app=express(),
    bodyParser=require('body-parser'),
    mongoose=require("mongoose"),
    passport=require('passport'),
    LocalStrategy=require('passport-local'),
    Jobs=require('./models/job'),
    Internship=require('./models/internship'),
    Openings=require('./models/openings'),
    User=require('./models/user');

mongoose.connect("mongodb://localhost:27017/ReferralRoom",{useNewUrlParser: true, useUnifiedTopology: true});

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + "/public"));
app.set('view engine','ejs');

app.use(require("express-session")({
    secret: "no scret",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req,res,next){
    res.locals.currentUser=req.user;
    next();
});
// __________________________________________JOBS______________________________________________

// Jobs.create( {
//         name:"Business Finance - Financial Planning & Analysis - Associate Job in Bengaluru at Goldmansachs",
//         image:"https://static.vecteezy.com/system/resources/previews/000/110/770/original/casino-logos-elements-vector.jpg", 
//         description:"Finance Planning & Analysis (“FP&A) is responsible for effectively managing the firm’s forward-looking business planning and strategic transformation initiatives. Our team collaborates with each of the firm’s businesses, Controllers, Corporate Treasury, Risk, among other groups at the firm, to gain the expertise required to provide critical analysis to project and forecast financial results. We use our expertise to execute strategic initiatives to provide internal clients, such as firm and divisional leadership, access to financial information more efficiently and effectively. Professionals in the Finance division have an analytical mindset, exhibit intellectual curiosity and are from diverse academic backgrounds."
//         },
// function(err,job){
//     if(err)
//         console.log(err);
//     else{
//         console.log("job created");
//         console.log(job);
//     }
// });


app.get('/',function(req,res){
    res.render('home');
});

app.get('/jobs',function(req,res){
    Jobs.find({},function(err,jobs){
        if(err)
            console.log(err);
        else{
            res.render('jobs/jobs',{jobs:jobs});
        }
    })
    
});

app.get('/jobs/new',function(req,res){
    res.render('jobs/new');
})

app.post('/jobs',function(req,res){
 
    var newJob=req.body.job;
    Jobs.create(newJob,function(err,newlycreated){
        if(err)
            console.log(err);
        else
            res.redirect('/jobs');    
    })
});

app.get('/jobs/:id',function(req,res){
    Jobs.findById(req.params.id,function(err,foundJob){
        if(err)
            console.log(err);
        else
            res.render('jobs/show',{job:foundJob})
    })
});
// ______________________________________________INTERNSHIP______________________________________



app.get('/internship',function(req,res){
    Internship.find({},function(err,internship){
        if(err)
            console.log(err);
        else{
            res.render('internship/internship',{internship:internship});
        }
    })
});

app.get('/internship/new',function(req,res){
    res.render('internship/new');
})

app.post('/internship',function(req,res){
 
    var newInternship=req.body.internship;
    Internship.create(newInternship,function(err,newlycreated){
        if(err)
            console.log(err);
        else
            res.redirect('/internship');    
    })
});

app.get('/internship/:id',function(req,res){
    Internship.findById(req.params.id,function(err,foundInternship){
        if(err)
            console.log(err);
        else
            res.render('internship/show',{internship:foundInternship})
    })
});
// _______________________________________________INTERNAL OPENINGS__________________________________


app.get('/internal-openings',isLoggedIn,function(req,res){
    Openings.find({},function(err,openings){
        if(err)
            console.log(err);
        else{
            res.render('openings/openings',{opening:openings});
        }
    })
});

app.get('/internal-openings/new',function(req,res){
    res.render('openings/new');
})

app.post('/internal-openings',function(req,res){
 
    var newopening=req.body.opening;
    Openings.create(newopening,function(err,newlycreated){
        if(err)
            console.log(err);
        else
            res.redirect('/internal-openings');    
    })
});

app.get('/internal-openings/:id',function(req,res){
    Openings.findById(req.params.id,function(err,foundopening){
        if(err)
            console.log(err);
        else
            res.render('openings/show',{opening:foundopening})
    })
});
// _____________________________________REFERRAL______________________________________________

app.get('/referral',function(req,res){
    res.render('referral/referral');
});
// ____________________________________ REGISTER___________________________________________________
app.get('/signup',function(req,res){
    
    res.render('signup');
})
app.post('/register',function(req,res){
    var newUser=({username:req.body.username});
    User.register(newUser,req.body.password,function(err,user){
        if(err){
            console.log(err);
            res.send('try different username or password');
        }else{
            passport.authenticate("local")(req,res,function(){
                res.redirect('/');
                console.log('signup');
            });
        }
    });
});

app.post("/login", passport.authenticate("local", 
    {
        successRedirect: "/internal-openings",
        failureRedirect: "/"
    }), function(req, res){
        console.log('login');
});
app.get("/logout", function(req, res){
    req.logout();
    res.redirect("/");
    console.log('logout');
 });

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/");
}

app.listen(3000,function(){
    console.log('server started');
});

