// using the type module instead if the common js module use.
//use the chatgpt to do the README files.

import express from "express";
import bodyParser from "body-parser";
import router from "./routes/tasks.js";
import connectDB from "./db/connect.js";
import dotenv from "dotenv"
import notFound from "./middleware/noRoute.js";
import errorHandlerMiddleware from "./middleware/error_handler.js";
const app = express();

const port= process.env.PORT|| 3000;
 

app.use(bodyParser.urlencoded({ extended: true}));

app.use(express.static("./public"))

app.use(express.json())



app.use("/api/v1/tasks", router)
app.use(notFound)
app.use(errorHandlerMiddleware);



const start = async()=>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, () =>{
            console.log(`This server is running on port ${port} and is connected to DB`);
        
        });
        
        
    } catch (error) {
       console.log(error) 
    }
}
dotenv.config()
start()



