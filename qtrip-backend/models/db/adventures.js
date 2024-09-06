const mongoose = require('mongoose');

const adventuresSchema = new mongoose.Schema({
   id: {
      type: String,
      required: true,
   },
   name: {
      type: String,
      required: true,
   },
   costPerHead: {
      type: Number,
      required: true,
   },
   currency: {
      type: String,
      required: true,
   },
   image: {
      type: String,
      required: true,
   },
   duration: {
      type: Number,
      required: true,
   },
   category: {
      type: String,
      required: true,
   },
   city: {
      type: String,
      required: true,
   },
});

const adventuresData = mongoose.model("adventures", adventuresSchema);

module.exports = adventuresData;