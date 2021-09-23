const express=require("express");
const path=require("path");
const port=process.env.port || 3000;
app=express();
const path_main=path.join(__dirname+"../public");
app.use(express.static(path_main));
app.set("view engine","ejs");
app.get("/",(req,res)=>{
    res.render("index");
})

app.listen(port,()=>{
    console.log("server running");
});