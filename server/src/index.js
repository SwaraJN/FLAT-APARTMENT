const express=require("express")
const connect=require("./config/db")

const resident=require("./controller/resident.Contoller")
const flat=require("./controller/flatController")
 
const app=express()

app.use(express.json())
app.use("/resident",resident)
app.use("/flat",flat)

app.listen(2212,async()=>{
try {
    await connect()
    console.log("2212 port is running")
} catch (error) {
    console.log(error.message)
}
})