const express=require('express');

const app=express();

const port=3000

app.get('/hussain',(req,res)=>{
    res.send("hello World! how are you")
})
app.get('/login',(req,res)=>{
    res.send("<h1>login</h1>")
})

app.get('/github',(req,res)=>{
    res.json(githubData)
})


app.listen(port,()=>{
    console.log(`Example app listening on port number ${port}`);
})