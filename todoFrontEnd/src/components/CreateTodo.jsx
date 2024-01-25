import { useState } from "react"

export function CreateTodo(){
    const [title,setTitle]=useState("")
    const [description, setDescription]=useState("")
    return <div>
        <input type="text" onChange={function(e){
            const value = e.target.value
            setTitle(value)
        }} placeholder="title" style={{
            padding: 10,
            margin: 10,
            width: 200,
        }}/><br></br>
        <input type="text" onChange={function(e){
            const value = e.target.value
            setDescription(value)
        }} placeholder="Description" style={{
            padding: 10,
            margin: 10,
            width: 200,
        }}/><br></br>
        <button style={{
            padding: 10,
            margin: 10,
            width: 200,
        }} onClick={()=>{
            fetch("http://localhost:3000/todo",{
                method: "POST",
                body:JSON.stringify({
                    title: title,
                    description: description,
                    completed: false
                }),
                headers:{
                    "Content-Type": "application/json"
                }
            })
            .then(async function(res){
                const json = await res.json();
                alert("Todo added")
            })
        }}>Submit</button>
    </div>
}