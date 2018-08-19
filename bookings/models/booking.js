const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var bookingSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  flight: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Flight"
  },
  seat: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Seat"
  },
  payments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Payment"
    }
  ]
});

module.exports = mongoose.model("Booking", bookingSchema);
