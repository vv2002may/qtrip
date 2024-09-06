const express = require('express');
const cors=require('cors')
const {PORT}=require('./config/index');
const dbConnect = require('./services/dbConnect');
const { userRouter, adminRouter } = require('./router');


const app = express();

app.use(cors());
app.use(express.json());

dbConnect({ dbName: "Qtrip" });

app.use('/api/v1', userRouter);
// app.use('/api/v1/admin',adminRouter)

app.listen(PORT,(result)=>console.log("Server is working at PORT :",PORT));