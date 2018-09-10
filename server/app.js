import express from 'express';
import routes from './routes';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';


mongoose.connect("mongodb://localhost:27017/maxpay", ()=>{
    console.log("Connected to mongo");
    
})
const app = express()
app.use(bodyParser.json())
//Prefix the API version
app.use('/api/v1', routes)

export default app;