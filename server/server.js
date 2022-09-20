const { application } = require("express")
const express = require("express")
const cors = require("cors")
const mongoose = require('mongoose')
const connectDB = require('./config/mongoose.config')
require('dotenv').config()
const loginRegRoutes = require('./routes/login_registration.routes')


const app = express()

//MIDDLEWARE
app.use(cors())
//built in middleware for json
app.use(express.json());
app.use(express.urlencoded({extended:true}));

connectDB();
loginRegRoutes(app)



const PORT = process.env.PORT || 8000

app.listen(PORT, () => console.log(`Express server is running on ${PORT}`))