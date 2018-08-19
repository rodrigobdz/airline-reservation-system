const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var flightSchema = new Schema({
  name: String,
  from: String,
  to: String,
  date: Date,
  seats: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Seat"
    }
  ]
});

module.exports = mongoose.model("Flight", flightSchema);
