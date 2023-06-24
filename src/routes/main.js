const express = require("express");

const {route} = require('express/lib/application');

const detail = require("../models/details");
const Slider = require("../models/slider")
const service = require("../models/service")
const footer = require("../models/footer")

const routes = express.Router()

routes.get("/",async (req,res)=>{

    const details=await detail.findOne({"_id":"6484a6b6dbe3c0c827d985b6"});
    const slides = await Slider.find()
    const services = await service.find()
    const footers = await footer.findOne({"_id":"648cc9334edae013c4f16190"})
    //console.log(slides)
    res.render("index",{
        details:details,
        slides: slides,
        services:services,
        footers:footers
    })
})


routes.get("/gallery",async (req,res)=>{
    const details=await detail.findOne({"_id":"6484a6b6dbe3c0c827d985b6"});
    res.render("gallery",{
        details:details
    })
})

routes.post("/process-contact-form",(req,res)=>{
    console.log("form submitted")
    console.log(req.body)
})

module.exports=routes