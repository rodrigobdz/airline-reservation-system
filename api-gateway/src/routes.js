"use strict";
module.exports = [
  {
    method: "GET",
    path: "/",
    handler: function(request, h) {
      return "Welcome to the Airline Reservation System";
    }
  },
  {
    method: "GET",
    path: "/flights",
    handler: function(request, h) {
      return "Returns available flights";
    }
  },
  {
    method: "GET",
    path: "/flights/{flight}",
    handler: function(request, h) {
      return "Returns flight details";
    }
  },
  {
    method: "POST",
    path: "/flights/{flight}",
    handler: function(request, h) {
      return "Create new flight";
    }
  },
  {
    method: "GET",
    path: "/users",
    handler: function(request, h) {
      return "Returns all passengers";
    }
  },
  {
    method: "GET",
    path: "/users/{user}/flights",
    handler: function(request, h) {
      return "Returns all booked flights from a user";
    }
  },
  {
    method: "GET",
    path: "/users/{user}/flights/{flight}",
    handler: function(request, h) {
      return "Returns info regarding a user's specific flight";
    }
  },
  {
    method: "GET",
    path: "/users/{user}/payments",
    handler: function(request, h) {
      return "Returns all user payments";
    }
  }
];
