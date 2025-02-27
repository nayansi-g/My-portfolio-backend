const router = require("express").Router();

const {Intro,About , Projects,Skills , Contact} = require("../models/portfolioModel")


router.get("/get-portfolio-data", async (req,res)=>{ 
    console.log("Called get portfolio")
    try {
           
        const intros = await Intro.find()
        const abouts = await About.find()
        const projects = await Projects.find()
        const skills =  await Skills.find()
        const contacts = await Contact.find()
       

        res.status(200).send({
            intro:intros[0],
            about:abouts[0],
            projects:projects,
            skills:skills,
            contacts :contacts
        })


    } catch (error) {
        console.error("Error:", error); 
        res.status(500).json({ error: "Internal server error" });
        
    }
});
router.post("/contact", async (req,res)=>{
    console.log(req.body, "Called Request Body")
    try {
        const newData = new Contact({
            name: req.body.name,
            email: req.body.email,
            country: req.body.country,
            message: req.body.message
        });
        await newData.save();
        res.status(200).json({message: "Data saved successfuly"});
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Internal server error" });
    }

});

module.exports = router;