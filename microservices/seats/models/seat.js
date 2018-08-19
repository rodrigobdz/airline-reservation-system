const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var seatSchema = new Schema({
  name: String,
  type: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "SeatType"
  },
  flight: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Flight"
  }
});

module.exports = mongoose.model("Seat", seatSchema);
