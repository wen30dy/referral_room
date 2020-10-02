var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var UserSchema = new mongoose.Schema({
    username: String,
    number:Number,
    email:String,
    password: String,
    institute:String,
    eduFrom:String,
    eduTo:String,
    degree:String,
    more:String,
    experience:String,
    skill:String,
    jobProfile:String,
    expertise:String,
    location:String,
    language:String
});

UserSchema.plugin(passportLocalMongoose)

module.exports = mongoose.model("User", UserSchema);