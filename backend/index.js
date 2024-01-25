const express = require('express')
const {todoSchema , completedSchema} = require('./types')
const { todo } = require('./db')
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(cors())
app.get('/todos',async (req,res)=>{
    const todos = await todo.find({});
    res.status(200).json({
        todos
    })
})
app.post('/todo',async (req,res)=>{
    const data = req.body
    const parsheddata = todoSchema.safeParse(data)
    if(parsheddata.success){
        //input the values 
        await todo.create({
            title: data.title,
            description: data.description,
            completed: false
        })
        res.status(200).json({
            msg: "the todo is created successfully"
        })
    }else{
        res.status(411).json({
            msg: "You have send wrong data"
        })
    }
})
app.put('/completed',async (req,res)=>{
    const id = req.body.id
    const parshedId = completedSchema.safeParse(id)
    if(parshedId){
        //update the value to completed 
        await todo.update({
            _id: req.body.id
        },{
            completed: true
        })
        res.json({
            msg: "completed"
        })
    }else{
        res.status(411).json({
            msg: "You have send wrong data"
        })
    }

})
app.listen(3000)