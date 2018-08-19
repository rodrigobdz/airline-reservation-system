"use strict";

const Hapi = require("hapi");
const H2O2 = require("h2o2");
const routes = require("./routes");

/**
 * Server configuration
 */
const server = Hapi.server({
  host: "localhost",
  port: 8000
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
    await server.register({ plugin: H2O2 });
    await server.start();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }

  console.log("Server running at:", server.info.uri);
}

start();
