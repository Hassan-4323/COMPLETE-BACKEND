const mongoose = require('mongoose');


// postSchema = how data will be look in mongoDB
const postSchema = new mongoose.Schema({
    image : String,
    caption : String
})


// postModel = it tell the collection name in mongoDB database , we created here is post so data will be stored in post
const postModel = mongoose.model("post", postSchema);

module.exports = postModel