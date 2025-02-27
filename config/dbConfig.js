const mongoose = require("mongoose");

module.exports = (async ()=>{
    try {
        await mongoose.connect("mongodb+srv://nayansigupta29:yATFUdEiOHJunMx4@cluster0.lpbds.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        console.log("database connected");
    } catch (error) {
        console.log(error);
    }
})();


