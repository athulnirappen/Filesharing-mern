const mongoose=require('mongoose')

const DBconnection =async () => {
    const DB_URL = `mongodb://user:athulthomas@ac-rgp7291-shard-00-00.qcv0mge.mongodb.net:27017,ac-rgp7291-shard-00-01.qcv0mge.mongodb.net:27017,ac-rgp7291-shard-00-02.qcv0mge.mongodb.net:27017/?ssl=true&replicaSet=atlas-11nsla-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
       await mongoose.connect(DB_URL, { useNewUrlParser: true })
        console.log("Data base connected successfully");
        
    } catch (error) {
       console.error("error while connecting mongodb database",error.message) 
    }
}

module.exports = DBconnection;