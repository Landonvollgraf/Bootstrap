const express = require('express')
const app = new express()


app.use(express.static('public'))

app.listen(5000, ()=>{
    console.log('App listening on port 4000')
})

app.get('/',(req,res) =>{
    res.sendFiles(path.resolve(__dirname,'/index.html'))
})
app.get('/about',(req,res) =>{
    res.sendFiles(path.resolve(__dirname,'/about.html'))
})
app.get('/contact',(req,res) =>{
    res.sendFiles(path.resolve(__dirname,'/contact.html'))
})
app.get('/post',(req,res) =>{
    res.sendFiles(path.resolve(__dirname,'/post.html'))
})