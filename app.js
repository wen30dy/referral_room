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
    // seedDB      = require("./seed");

var jobsRoutes=require('./routes/jobs'),
    internshipRoutes=require('./routes/internship'),
    openingRoutes=require('./routes/openings');

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

app.use(jobsRoutes);
app.use(internshipRoutes);
app.use(openingRoutes);
// __________________________________________JOBS______________________________________________




app.get('/',function(req,res){
    res.render('home');
});


// ______________________________________________INTERNSHIP______________________________________



// _______________________________________________INTERNAL OPENINGS__________________________________



// _____________________________________REFERRAL______________________________________________

app.get('/referral',function(req,res){
    res.render('referral/referral');
});
// ____________________________________ REGISTER___________________________________________________
app.get('/signup',function(req,res){
    
    res.render('signup');
})
app.post('/register',function(req,res){
    var newUser=({
            username        :req.body.username,
            number          :req.body.number,
            email           :req.body.email,
            institute       :req.body.Institution,
            eduFrom         :req.body.eduFrom,
            eduTo           :req.body.eduTo,
            degree          :req.body.degree,
            experience      :req.body.experience,
            skill           :req.body.skills,
            jobProfile      :req.body.profile,
            expertise       :req.body.Expertise,
            location        :req.body.location,
            language        :req.body.language
        });
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
    res.redirect("/signup");
}

app.listen(3000,function(){
    console.log('server started');
});

