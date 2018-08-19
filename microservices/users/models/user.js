const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var userSchema = new Schema({
  name: String,
  birthday: Date,
  flights: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Flight"
    }
  ],
  payments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Payment"
    }
  ]
});

module.exports = mongoose.model("User", userSchema);
