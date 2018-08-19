"use strict";

const Hapi = require("hapi");
const routes = require("./routes");

/**
 * Server configuration
 */
const server = Hapi.server({
  host: "localhost",
  port: 8001
});

/**
 * Define server routes
 */
server.route(routes);

/**
 * Start server and handle errors
 */
async function start() {
  try {
    await server.start();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }

  console.log("Server running at:", server.info.uri);
}

start();
