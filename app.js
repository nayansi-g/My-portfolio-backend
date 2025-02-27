const express = require("express");
const app = express();
const cors = require('cors');
const portfolioRoute = require("./routes/portfolioRoute")
 const dbConfig =require("./config/dbConfig");


app.use(express.urlencoded({extended: true}));
app.use(cors("dev"));
app.use(express.json());

app.use("/api/portfolio", portfolioRoute);


app.listen(4000,(err)=>{
    if(!err){
        console.log("app is listening on 5000")
    }else{
        console.log("something went wrong" , err)
    }
})