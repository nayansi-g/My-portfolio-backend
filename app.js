const express = require("express");
const app = express();
const cors = require('cors');
const portfolioRoute = require("./routes/portfolioRoute")
const dbConfig =require("./config/dbConfig");

const port = process.env.PORT || 4000

app.use(express.urlencoded({extended: true}));
app.use(cors("dev"));
app.use(express.json());

app.use("/api/portfolio", portfolioRoute);


app.listen(port,(err)=>{
    if(!err){
        console.log(`app is running on ${port}`)
    }else{
        console.log("something went wrong" , err)
    }
})