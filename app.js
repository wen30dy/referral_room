var express=require('express'),
    bodyParser=require('body-parser');

var app=express();

app.set('view engine','ejs');

app.use(express.static(__dirname + "/public"));

app.get('/',function(req,res){
    res.render('home');
});

// var jobs=[{name:"", image:"",description=""}]
var jobs=[
            {name:"Business Finance - Financial Planning & Analysis - Associate Job in Bengaluru at Goldmansachs",
            image:"https://th.bing.com/th/id/OIP.e7DAffXDfvIezTSyft8eBAHaEo?pid=Api&rs=1",
             description:"Finance Planning & Analysis (“FP&A) is responsible for effectively managing the firm’s forward-looking business planning and strategic transformation initiatives. Our team collaborates with each of the firm’s businesses, Controllers, Corporate Treasury, Risk, among other groups at the firm, to gain the expertise required to provide critical analysis to project and forecast financial results. We use our expertise to execute strategic initiatives to provide internal clients, such as firm and divisional leadership, access to financial information more efficiently and effectively. Professionals in the Finance division have an analytical mindset, exhibit intellectual curiosity and are from diverse academic backgrounds."},
            
             {name:"Business Finance - Financial Planning & Analysis - Associate Job in Bengaluru at Goldmansachs",
            image:"https://static.vecteezy.com/system/resources/previews/000/110/770/original/casino-logos-elements-vector.jpg", 
            description:"Finance Planning & Analysis (“FP&A) is responsible for effectively managing the firm’s forward-looking business planning and strategic transformation initiatives. Our team collaborates with each of the firm’s businesses, Controllers, Corporate Treasury, Risk, among other groups at the firm, to gain the expertise required to provide critical analysis to project and forecast financial results. We use our expertise to execute strategic initiatives to provide internal clients, such as firm and divisional leadership, access to financial information more efficiently and effectively. Professionals in the Finance division have an analytical mindset, exhibit intellectual curiosity and are from diverse academic backgrounds."},
       
            {name:"Business Finance - Financial Planning & Analysis - Associate Job in Bengaluru at Goldmansachs",
            image:"https://th.bing.com/th/id/OIP.e7DAffXDfvIezTSyft8eBAHaEo?pid=Api&rs=1",
             description:"Finance Planning & Analysis (“FP&A) is responsible for effectively managing the firm’s forward-looking business planning and strategic transformation initiatives. Our team collaborates with each of the firm’s businesses, Controllers, Corporate Treasury, Risk, among other groups at the firm, to gain the expertise required to provide critical analysis to project and forecast financial results. We use our expertise to execute strategic initiatives to provide internal clients, such as firm and divisional leadership, access to financial information more efficiently and effectively. Professionals in the Finance division have an analytical mindset, exhibit intellectual curiosity and are from diverse academic backgrounds."},
            
             {name:"Business Finance - Financial Planning & Analysis - Associate Job in Bengaluru at Goldmansachs",
            image:"https://static.vecteezy.com/system/resources/previews/000/110/770/original/casino-logos-elements-vector.jpg", 
            description:"Finance Planning & Analysis (“FP&A) is responsible for effectively managing the firm’s forward-looking business planning and strategic transformation initiatives. Our team collaborates with each of the firm’s businesses, Controllers, Corporate Treasury, Risk, among other groups at the firm, to gain the expertise required to provide critical analysis to project and forecast financial results. We use our expertise to execute strategic initiatives to provide internal clients, such as firm and divisional leadership, access to financial information more efficiently and effectively. Professionals in the Finance division have an analytical mindset, exhibit intellectual curiosity and are from diverse academic backgrounds."},
        
            {name:"Business Finance - Financial Planning & Analysis - Associate Job in Bengaluru at Goldmansachs",
            image:"https://th.bing.com/th/id/OIP.e7DAffXDfvIezTSyft8eBAHaEo?pid=Api&rs=1",
             description:"Finance Planning & Analysis (“FP&A) is responsible for effectively managing the firm’s forward-looking business planning and strategic transformation initiatives. Our team collaborates with each of the firm’s businesses, Controllers, Corporate Treasury, Risk, among other groups at the firm, to gain the expertise required to provide critical analysis to project and forecast financial results. We use our expertise to execute strategic initiatives to provide internal clients, such as firm and divisional leadership, access to financial information more efficiently and effectively. Professionals in the Finance division have an analytical mindset, exhibit intellectual curiosity and are from diverse academic backgrounds."},
            
             {name:"Business Finance - Financial Planning & Analysis - Associate Job in Bengaluru at Goldmansachs",
            image:"https://static.vecteezy.com/system/resources/previews/000/110/770/original/casino-logos-elements-vector.jpg", 
            description:"Finance Planning & Analysis (“FP&A) is responsible for effectively managing the firm’s forward-looking business planning and strategic transformation initiatives. Our team collaborates with each of the firm’s businesses, Controllers, Corporate Treasury, Risk, among other groups at the firm, to gain the expertise required to provide critical analysis to project and forecast financial results. We use our expertise to execute strategic initiatives to provide internal clients, such as firm and divisional leadership, access to financial information more efficiently and effectively. Professionals in the Finance division have an analytical mindset, exhibit intellectual curiosity and are from diverse academic backgrounds."}
        
        ];
var internships=[
                    {name:"Human Resources (HR) work from home job/internship at Compass Group",image:"",description:"Compass is building the first modern end-to-end real estate platform by integrating agents, buyers, and sellers through technology. "},
                    {name:"Mobile App Development Work From Home Job / Internship at Deenaji Fresh Foods Private Limited",image:"",description:"Compass is building the first modern end-to-end real estate platform by integrating agents, buyers, and sellers through technology. "}
                ];        
var openings=[
            {name:"Business Finance - Financial Planning & Analysis - Associate Job in Bengaluru at Goldmansachs",
            image:"https://th.bing.com/th/id/OIP.e7DAffXDfvIezTSyft8eBAHaEo?pid=Api&rs=1",
            description:"Finance Planning & Analysis (“FP&A) is responsible for effectively managing the firm’s forward-looking business planning and strategic transformation initiatives. Our team collaborates with each of the firm’s businesses, Controllers, Corporate Treasury, Risk, among other groups at the firm, to gain the expertise required to provide critical analysis to project and forecast financial results. We use our expertise to execute strategic initiatives to provide internal clients, such as firm and divisional leadership, access to financial information more efficiently and effectively. Professionals in the Finance division have an analytical mindset, exhibit intellectual curiosity and are from diverse academic backgrounds."},
        
            {name:"Business Finance - Financial Planning & Analysis - Associate Job in Bengaluru at Goldmansachs",
            image:"https://static.vecteezy.com/system/resources/previews/000/110/770/original/casino-logos-elements-vector.jpg", 
            description:"Finance Planning & Analysis (“FP&A) is responsible for effectively managing the firm’s forward-looking business planning and strategic transformation initiatives. Our team collaborates with each of the firm’s businesses, Controllers, Corporate Treasury, Risk, among other groups at the firm, to gain the expertise required to provide critical analysis to project and forecast financial results. We use our expertise to execute strategic initiatives to provide internal clients, such as firm and divisional leadership, access to financial information more efficiently and effectively. Professionals in the Finance division have an analytical mindset, exhibit intellectual curiosity and are from diverse academic backgrounds."}
            ];
app.get('/jobs',function(req,res){
    res.render('jobs/jobs',{jobs:jobs});
});

app.get('/internship',function(req,res){
    res.render('internship/internship',{internships:internships});
});

app.get('/internal-openings',function(req,res){
    res.render('openings/openings',{openings:openings})
});


app.listen(3000,function(){
    console.log('server started');
});

