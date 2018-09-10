import express from 'express';
import routes from './routes';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';


mongoose.connect(process.env.DB, ()=>{
    console.log("Connected to mongo");
    
})
const app = express()
app.use(bodyParser.json())
//Prefix the API version
app.use('/api/v1', routes)

export default app;