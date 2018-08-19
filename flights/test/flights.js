import test from "ava";
import server from "../src/app";

test("GET /flights success", t => {
  const request = {
    method: "GET",
    url: "/flights",
    payload: {}
  };

  return server.inject(request).then(response => {
    t.is(response.payload, "Returns all flights");
    t.is(response.statusCode, 200, "Status is 200");
  });
});
