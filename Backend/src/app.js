require('dotenv').config() 
const express  = require('express');
const app = express();
const cors = require('cors')
const routes  = require('../src/routes/Router')
const error = require('../src/middleware/error')

const port = process.env.PORT || 7000
require('../src/db/conn') //for connecting to mongodb


const corsOptions = {
    origin: "http://localhost:5173",
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true,
  };

app.use(cors(corsOptions));


app.use(express.json())
app.use(express.urlencoded({extended:false}));
app.use(routes)

app.use(error)

app.listen(port,(req,res)=>{
    console.log(`listening on port ${port}`)
});