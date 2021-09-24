const express=require("express");
const path=require("path");
const port=process.env.port || 8000;
app=express();
const path_main=path.join(__dirname+"../public");
app.use(express.static(path_main));
app.set("view engine","ejs");
app.get("/",(req,res)=>{
    res.render("index");
})
app.get("/dsa",(req,res)=>{
    res.render("dsa");
})
app.get("/web",(req,res)=>{
    res.render("web");
})
app.get("/ML",(req,res)=>{
    res.render("ml");
})
app.listen(port,()=>{
    console.log(`server running at http://localhost:${port}/`);
});