const express = require('express');
const cors=require('cors')
const {PORT}=require('./config/index');
const router = require('./router');
const dbConnect = require('./services/dbConnect');


const app = express();

app.use(cors());
app.use(express.json());

dbConnect({ dbName: "Qtrip" });

app.use('/api/v1',router);

app.listen(PORT,(result)=>console.log("Server is working at PORT :",PORT));