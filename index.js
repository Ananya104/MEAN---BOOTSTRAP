const express=require("express");
const app=express();
const path=require("path");

app.use('/css',express.static(path.join(__dirname,'node_modules/bootstrap/dist/css')))
app.use('/js',express.static(path.join(__dirname,'node_modules/bootstrap/dist/js')))
app.use(express.static("public"));


app.get("/",function(req,res){
    res.sendFile(path.join(__dirname,'index.html'))
})

app.listen(3000,function(req,res){
    console.log("Server is running on port 3000")
})