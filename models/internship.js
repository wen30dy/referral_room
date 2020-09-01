var mongoose=require('mongoose');

var internshipSchema=new mongoose.Schema({
    name:String,
    image:String,
    description:String,
    created:{type:Date, default:Date.now}
});

module.exports=mongoose.model("Internship",internshipSchema);
