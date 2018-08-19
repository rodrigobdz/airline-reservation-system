"use strict";

module.exports = [
  {
    method: "GET",
    path: "/flights",
    handler: function(request, h) {
      return "Returns all flights";
    }
  }
];
