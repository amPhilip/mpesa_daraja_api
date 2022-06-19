const express = require('express')
const dotenv = require('dotenv')
const request = require('request')
const bodyParser = require('body-parser')
const connectDB = require('./config/db.js')
const app = express();
dotenv.config();

app.use(bodyParser.json())
//db connection
connectDB()

//Obtaining the access token


const PORT = process.env.PORT || 8080;
app.listen(PORT,() =>{
    console.log(`server running on PORT${PORT}`)
})