const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var paymentSchema = new Schema({
  amount: Number,
  title: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  type: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "PaymentType"
  }
});

module.exports = mongoose.model("Payment", paymentSchema);
