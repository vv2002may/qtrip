const mongoose = require('mongoose');

const reservationsSchema = new mongoose.Schema({

   userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
   },
   adventureId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "adventures",
      required: true,
   },
   person: {
      type: Number,
      required: true,
      default: 1,
   },
   isCancelled: {
      type: Boolean,
      required: true,
      default: false,
   },



}, { timestamps: true });

const reservationsData = mongoose.model("reservations", reservationsSchema)

module.exports = reservationsData;