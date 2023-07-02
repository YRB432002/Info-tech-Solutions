const express=require("express");
const serverless =require('serverless-http');
const hbs=require("hbs");
const mongoose = require("mongoose");
const app = express();
const routes = require('./routes/main');
const detail = require("./models/details");
const Slider=require("./models/slider")
const service=require("./models/service")
const footer=require("./models/footer")
const bodyParser=require('body-parser')

app.use(bodyParser.urlencoded({
  extended:true
}))

app.use('',routes)
app.use('/static',express.static("public"))


// template engine
app.set('view engine','hbs');
app.set("views","views");
hbs.registerPartials("views/partials")

//db connection

mongoose.connect("mongodb://0.0.0.0:27017/Website")
  .then(() => {
    console.log("connected to db");
      // footer.create({
      //   icons:[
      //     {
      //       iconUrl:"icon ion-social-instagram",
      //       link:"https://instagram.com"
      //     },
      //     {
      //       iconUrl:"icon ion-social-snapchat",
      //       link:"https://snapchat.com"
      //     },
      //     {
      //       iconUrl:"icon ion-social-twitter",
      //       link:"https://twitter.com"
      //     },
      //     {
      //       iconUrl:"icon ion-social-facebook",
      //       link:"https://facebook.com"
      //     }
      //   ],

      //   links:[
      //     {
      //       label:"Home",
      //       url:"#"
      //     },
      //     {
      //       label:"Services",
      //       url:"/services"
      //     },
      //     {
      //       label:"About",
      //       url:"/about"
      //     },
      //     {
      //       label:"Terms",
      //       url:"/terms"
      //     },
      //     {
      //       label:"Privacy Policy",
      //       url:"/privacy_policy"
      //     }

      //   ], 
      //   copyright:"Company Name © 2018"
      // })
    // Slider.create([
    //   {
    //     title: 'Learn Java in easy manner',
    //     subTitle: 'Java is one of the most popular programming language',
    //     imageUrl: '/static/images/s1.jpg'
    //   },
    //   {
    //     title: 'What is Django in Python?',
    //     subTitle: 'It is the most famous web framework of Python programming',
    //     imageUrl: '/static/images/s2.jpg'
    //   },
    //   {
    //     title: 'What about Nodejs?',
    //     subTitle: 'Node Js is runtime environment to execute javascript outside browser',
    //     imageUrl: '/static/images/s3.jpg'
    //   }
    // ])
    // detail.create({
    //     brandName:"Info-Tech Solutions",
    //     brandIconUrl:"/static/images/logo.png",
    //     links:[
    //         {
    //             label:"Home",
    //             url:"/"
    //         },
    //         {
    //             label:"Services",
    //             url:"/services"
    //         }
    //     ]
    // })
    // service.create([
    //   {
    //     title: "Provide Best Courses",
    //     icon: "fab fa-accusoft",
    //     description: "We provide best services for placement and coding",
    //     linkText1:"Check",
    //     link1:"https://test1.com",
    //     linkText2:"Support",
    //     link2:""
    //   },
    //   {
    //     title: "Learn Projects",
    //     icon: "fab fa-affiliatetheme",
    //     description: "We provide best services for placement and coding",
    //     linkText1:"Learn",
    //     link1:"https://test2.com",
    //     linkText2:"Support",
    //     link2:""
    //   },
    //   {
    //     title: "Provide Best Courses",
    //     icon: "fab fa-accusoft",
    //     description: "We provide best services for placement and coding",
    //     linkText1:"Check",
    //     link1:"https://test1.com",
    //     linkText2:"Support",
    //     link2:""
    //   }
    // ])
  })
  .catch(err => {
    console.log('Failed to connect to MongoDB', err)
  })


app.listen(process.env.PORT || 5556,()=>{
    console.log("server is running");
});

export const handler = serverless(app);


// inluded_files = [
//   "views/*/*.hbs",
//   "views/*.hbs"
// ]