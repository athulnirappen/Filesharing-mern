const file = require('../model/file.js')





const UploadImage =async (req, res) => {
    const fileobj = {
        path: req.file.path,
        name:req.file.originalname
    }
    try {

        const data = await file.create(fileobj)
        console.log(data);
        res.status(200).json({path:`http://localhost:4000/file/${data._id}`})
        
    } catch (error) {
        console.error(error.message);
        res.status(401).json({error:error.mesage})
    }
}

const downloadImage = async (req, res) => {
    try {
        const image = await file.findById(req.params.fileId)
        image.downloadContent++;
        await image.save();
        res.download(image.path,image.name)
    } catch (error) {
        console.error(error)
        return res.status(400).json({error:error.message})
    }
    
}
    

module.exports={UploadImage,downloadImage}