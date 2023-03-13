const express = require("express")
const router = express.Router()
const {UploadImage}= require('../controller/image-controller.js')

router.post("/upload", UploadImage)


module.exports=router