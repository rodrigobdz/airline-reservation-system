"use strict";

const mongoose = require("mongoose");
mongoose.connect(
  "mongodb://localhost/flight",
  { useNewUrlParser: true }
);

const Flight = require("../models/flight");

Flight.create(
  {
    name: "AD1090",
    from: "Paris",
    to: "Munich",
    date: Date.now()
  },
  {
    name: "AD1020",
    from: "Berlin",
    to: "Hamburg",
    date: Date.now()
  }
);

process.exit();
