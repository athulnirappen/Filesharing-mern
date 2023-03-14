const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
  path: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
    },
    downloadContent: {
        type: Number,
        required: true,
        default:0
  }
});

const file=mongoose.model("file",fileSchema)
module.exports = file;