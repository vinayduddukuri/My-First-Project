var express= require("express");
var cors=require("cors");
var mongoClient=require("mongodb").MongoClient;

var url="mongodb://127.0.0.1:27017"

var app=express();
app.use(cors());
app.use(express.urlencoded({extended:true}));   //used to convert incoming data to json
app.use(express.json());

app.get("/videos",(req,res)=>{
    mongoClient.connect(url).then((clientObject)=>{
        var database=clientObject.db("tutorial");
        database.collection("videolibrary").find({}).toArray().then((documents)=>{
            res.send(documents);
        })
    })
});

app.get("/videos/:id",(req,res)=>{
    var video_id=parseInt(req.params.id);
    mongoClient.connect(url).then((clientObject)=>{
        var database=clientObject.db("tutorial");
        database.collection("videolibrary").find({id:video_id}).toArray().then(documents=>{
            res.send(documents);
        })
    })
});

app.post("/addvideo",(req,res)=>{
    var video={
        "id":parseInt(req.body.id),
        "title":req.body.title,
        "url":req.body.url,
        "views":parseInt(req.body.views),
        "likes":parseInt(req.body.likes),
        "subscribed":req.body.subscribed
    }
    mongoClient.connect(url).then((clientObject)=>{
        var database=clientObject.db("tutorial");
        database.collection("videolibrary").insertOne(video).then((result)=>{
            console.log(`Video Inserted`);
            res.redirect("/videos");
        })
    })
});

app.put("/updatevideo/:id", (req, res) => {
    var video_id = parseInt(req.params.id);
    console.log("Received ID:", video_id);
    console.log("Received Data:", req.body); // Log the incoming data
    var video = {
        title: req.body.title,
        url: req.body.url,
        views: parseInt(req.body.views),
        likes: parseInt(req.body.likes),
        subscribed: req.body.subscribed === "true" || req.body.subscribed === true,
    };
    mongoClient.connect(url).then((clientObject) => {
        var database = clientObject.db("tutorial");
        database.collection("videolibrary")
            .updateOne({ id: video_id }, { $set: video })
            .then((result) => {
                console.log(`Video Updated:`, result);
                res.status(200).send({ message: "Video updated successfully" });
            })
            .catch((error) => {
                console.error("Error updating video:", error);
                res.status(500).send({ message: "Failed to update video" });
            });
    }).catch((error) => {
        console.error("Database connection error:", error);
        res.status(500).send({ message: "Database connection failed" });
    });
});


app.delete("/deletevideo/:id", (req, res) => {
    var video_id = parseInt(req.params.id);
    mongoClient.connect(url).then((clientObject) => {
        var database = clientObject.db("tutorial");
        database.collection("videolibrary").deleteOne({ id: video_id }).then(result => {
            console.log(`Video Deleted`);
            res.status(200).send({ message: "Video Deleted Successfully" });
        }).catch((error) => {
            console.log("Error deleting video:", error);
            res.status(500).send({ message: "Failed to delete video" });
        });
    })
    .catch((error) => {
        console.log("Failed to connect to MongoDB:", error);
        res.status(500).send({ message: "Internal server error" });
    });
});


app.listen(5566);
console.log(`Server Sarted : http://127.0.0.1:5566`);













