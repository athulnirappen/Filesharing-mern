const express = require("express");
const router = require('./routes/route.js')
const cors = require('cors')
const DBconnection=require("./database/db.js")



const app = express()
const PORT = 4000

app.use(cors())
app.use("/",router)
DBconnection()

app.listen(PORT, () => {
    console.log(`Server is Running on the PORT ${PORT}`);
})