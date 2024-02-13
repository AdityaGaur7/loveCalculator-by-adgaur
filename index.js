const express = require("express");
const app = express();
const bodyparser = require("body-parser"); 
var mongoose = require('mongoose');

app.use(bodyparser.urlencoded({extended:true}));

app.use(express.static('public'));  

app.get("/next",function(req,res){
    res.sendFile(__dirname+ "/next.html")
})
const crushdb = "mongodb+srv://adkumar7112:adgaur7112@cluster0.iw4txgj.mongodb.net/crushdata";
const db = "mongodb://127.0.0.1:27017/crush";
mongoose.connect(crushdb,{ useNewUrlParser: true , useUnifiedTopology: true })
        .then(()=>console.log("Connected to database"))
        .catch((err)=> console.log(err));


const crushSchema = {
    Name:String,
    Crush:String
}
const data = mongoose.model("data",crushSchema);

app.get("/",function (req,res) {
    res.sendFile(__dirname + "/index.html") ;
})
app.post("/",async function(req,res){
    let newData = new data({Name : req.body.nm ,Crush : req.body.crsh});
   await newData.save();
    console.log(newData);
    res.redirect('/next')
})

app.get("/alldata", async function(req, res) {
    try {
        const allData = await data.find();
        res.json(allData);
    } catch (error) {
        console.log(error);
        res.status(500).send("Error fetching data.");
    }
});
var Port = 3000 || process.env.PORT;

app.listen(Port,function(){
    console.log("server is running om 3000");
})