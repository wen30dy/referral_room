var mongoose=require('mongoose');

var openingsSchema=new mongoose.Schema({
    name:String,
    image:String,
    description:String,
    created:{type:Date, default:Date.now}
});

module.exports=mongoose.model("Openings",openingsSchema);
