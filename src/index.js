const express = require("express")
const Router = require("./route/route.js")
const mongoose = require("mongoose")
const bodyParser=require("body-parser")
const multer = require ("multer")
const app = express()


app.use(bodyParser.json())
app.use(multer().any())

mongoose.connect("mongodb+srv://yachika03:wkaTIq3zkjIou3YI@cluster0.t9qdtvx.mongodb.net/group28Database",                                                 
   { useNewUrlParser:true

   }).then(()=> console.log("MongoDB is connected"))
    .catch((err)=>console.log(err))

    app.use('/'  , Router)

    app.listen(process.env.PORT|| 3001, function() {
        console.log("Express app running on port"+(process.env.PORT|| 3001) )
    } )
