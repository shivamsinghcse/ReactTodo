const mongoose = require('mongoose')
//mongodbcompass url: mongodb+srv://shivamsinghcse:Shivam%40123@cluster0.xwdmlrs.mongodb.net/
mongoose.connect("mongodb+srv://shivamsinghcse:Shivam%40123@cluster0.xwdmlrs.mongodb.net/")
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})
const todo = mongoose.model('todos', todoSchema)
module.exports={
    todo
}