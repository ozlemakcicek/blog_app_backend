// console.log("blog app");

import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";

import * as dotenv from "dotenv"
dotenv.config()

import userRoutes from "./routers/userRoutes.js"



const app = express();
const PORT=process.env.PORT



// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())



// app.get("/getIslemi", (req, res)=>{
//     res.send("islem tamam")
// })

app.use("/users", userRoutes)


// mongodb

 const db=process.env.MongoURL;
 //mongoose

 mongoose
   .connect(db)
   .then(() => console.log("Connected!"))
   .catch((err) => {
     console.log(err);
   });



app.listen(PORT, () => {
  console.log(`bu server  ${PORT} portunda calisiyor`);
});