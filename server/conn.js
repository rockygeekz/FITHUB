const mongoose = require("mongoose");

const mongouri = "mongodb+srv://admin123:admin123@cluster0.9otoqef.mongodb.net/workouts?retryWrites=true&w=majority";

const connection = mongoose.connect(mongouri).then(()=>{
    console.log("Database Connected");
}).catch((error)=>{
    console.log("Error has occures \n ",error);
})



// const conn = async(req,res)=<{
//     await mongoose.connect(mongouri).then(()=>{

//     }).catch((error)=>{

//     })
// }
// conn();

module.exports = connection
