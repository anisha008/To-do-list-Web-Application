const express=require("express");
const bodyParser=require("body-parser");
const app=express();
const date=require(__dirname+"/views/date.js")

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:false}));
app.set("view engine","ejs");

const items=["Buy food","Cook food","Eat food"];
const workitems=[];

app.get("/",function(req,res){
    let todayDay=date.getDay();
    res.render("list",{listTitle:todayDay,newItem:items});
})

app.post("/",function(req,res){
    console.log(req.body.list);
    const addedItem=req.body.nextItem;
    if(req.body.list=="Work"){
        let workitem=req.body.nextItem;
        workitems.push(workitem);
        res.redirect("/work");
    }
    else{
        items.push(addedItem);
        res.redirect("/");
    }
})

app.get("/work",function(req,res){
    res.render("list",{listTitle:"Work",newItem:workitems});
})

app.listen(3000,function(){
    console.log("Server is running");
})