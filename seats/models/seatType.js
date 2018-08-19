const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var seatTypeSchema = new Schema({
  name: String,
  price: Number
});

module.exports = mongoose.model("SeatType", seatTypeSchema);
