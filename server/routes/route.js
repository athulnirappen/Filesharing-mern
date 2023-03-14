const express = require("express")
const router = express.Router()
const { UploadImage,downloadImage } = require('../controller/image-controller.js')
const upload=require('../utils/upload.js')

router.post("/upload", upload.single('file'), UploadImage)
router.get('/file/:fileId',downloadImage)


module.exports=router