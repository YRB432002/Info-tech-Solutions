const mongoose = require("mongoose");

const service=mongoose.Schema({
    title: String,
    icon: String,
    description: String,
    linkText1: String,
    link1: String,
    linkText2: String,
    link2: String
})

module.exports=mongoose.model("services",service);