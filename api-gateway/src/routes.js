"use strict";

function proxy(request, h, port) {
  return h.proxy({ host: "localhost", port: port });
}

function flightProxy(request, h) {
  return proxy(request, h, "8001");
}

function userProxy(request, h) {
  return proxy(request, h, "8002");
}

function paymentProxy(request, h) {
  return proxy(request, h, "8003");
}

function bookingProxy(request, h) {
  return proxy(request, h, "8004");
}

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
    handler: flightProxy
  },
  {
    method: "GET",
    path: "/flights/{flight}",
    handler: flightProxy
  },
  {
    method: "POST",
    path: "/flights/{flight}",
    handler: flightProxy
  },
  {
    method: "GET",
    path: "/users",
    handler: userProxy
  },
  {
    method: "GET",
    path: "/users/{user}/flights",
    handler: flightProxy
  },
  {
    method: "GET",
    path: "/users/{user}/flights/{flight}",
    handler: flightProxy
  },
  {
    method: "GET",
    path: "/users/{user}/payments",
    handler: paymentProxy
  },
  {
    method: "GET",
    path: "/users/{user}/bookings",
    handler: bookingProxy
  }
];
