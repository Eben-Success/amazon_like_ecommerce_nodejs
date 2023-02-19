const { default: mongoose } = require("mongoose")
const dotenv = require("dotenv").config();

mongoose.set("strictQuery", true)

const dbConnect = () => {
    try{
        const connect = mongoose.connect(process.env.MONGO_URI)
        console.log("Database connected successfully");
    }
    catch(error){
        console.log("Database connection failed");
        }

    }

module.exports = dbConnect