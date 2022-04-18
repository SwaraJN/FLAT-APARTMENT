const mongoose=require("mongoose")


function connect() {
    return mongoose.connect("mongodb+srv://swaraj:swaraj123@cluster0.ylj7b.mongodb.net/Flat")
}
module.exports=connect