const mongoose = require('mongoose');

const citiesSchema = new mongoose.Schema({
   id: {
      type: String,
      required: true,
   },
   city: {
      type: String,
      required: true,
   },
   description: {
      type: String,
      required: true,
   },
   image: {
      type: String,
      required: true,
   },
});

const citiesData = mongoose.model("cities", citiesSchema);

module.exports = citiesData;