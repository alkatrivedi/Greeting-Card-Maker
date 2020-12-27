const express   =   require("express"),
      app       =   express();

app.set("view engine","ejs");
//app.set("views",path.join(__dirname, "views"));


app.get("/",(req,res)=>{
    res.send("***********");
});

app.listen(8000,()=>{
    console.log("Sarting app on port 8000....");
});