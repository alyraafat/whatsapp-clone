// importing
import express from "express";
import mongoose from "mongoose";
import Messages from "./dbMessages.js";
import Pusher from "pusher";
import cors from 'cors';

// app config
const app = express();
const port = process.env.PORT || 9000

const pusher = new Pusher({
    appId: "??",
    key: "??",
    secret: "??",
    cluster: "eu",
    useTLS: true
  });
  


// middleware
app.use(express.json())
app.use(cors());


// DB config
const connection_url = "mongodb+srv://username:password@whatsappcluster.f68tdop.mongodb.net/whatsappdb?retryWrites=true&w=majority"
mongoose.set('strictQuery', false);
mongoose.connect(connection_url,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})



// ????
const db = mongoose.connection;

db.once("open",()=>{
    console.log("DB connected")

    const msgCollection = db.collection("messagecontents")
    const changeStream = msgCollection.watch();

    changeStream.on("change",(change)=>{
        console.log(change);

        if(change.operationType==='insert'){
            const messageDetails = change.fullDocument;
            pusher.trigger('messages','inserted',{
                name:messageDetails.name,
                message:messageDetails.message,
                timestamp: messageDetails.timestamp,
                received: messageDetails.received
            })
        }else {
            console.log("error triggering pusher")
        }
    })
})



// api routes


app.get('/messages/sync',(req,res)=>{

    Messages.find((err,data)=>{
        if(err){
            res.status(500).send(err)
        }else {
            res.status(200).send(data)
        }
    })
})

app.post('/messages/new',(req,res)=>{
    const dbMessage = req.body;

    Messages.create(dbMessage,(err,data)=>{
        if(err){
            res.status(500).send(err)
        }else {
            res.status(201).send(data)
        }
    })
})
// listen
app.listen(port,()=>{
    console.log(`listening on localhost:${port}`)
})