import mongoose from "mongoose";

mongoose.Promise = global.Promise;

mongoose.connect('mongodb+srv://kingTide:2Iui7N4tqJfWUKDp@cluster0.yangws4.mongodb.net/?retryWrites=true&w=majority',{
    dbName:"develop"
})

const connection = mongoose.connection

connection.on('open', () =>{
    console.log("mongodb connected")
})
connection.on("error", err =>{
    console.log(err);
    process.exit(0)
})