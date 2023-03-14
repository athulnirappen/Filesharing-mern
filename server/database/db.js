const mongoose=require('mongoose')

const DBconnection =async () => {
    const DB_URL = `mongodb://localhost:27017/fileshare`;
    try {
       await mongoose.connect(DB_URL, { useNewUrlParser: true })
        console.log("Data base connected successfully");
        
    } catch (error) {
       console.error("error while connecting mongodb database",error.message) 
    }
}

module.exports = DBconnection