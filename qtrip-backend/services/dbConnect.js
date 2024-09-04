const mongoose = require('mongoose');
const {mongoURI}=require("../config/index")

const dbConnect = ({dbName}) => {
   mongoose.connect(mongoURI+dbName)
      .then(res => {
         console.log("DB is connected!");
      })
      .catch(err => {
         console.log("Some error occured while connecting DB!");
   })
}

module.exports = dbConnect;