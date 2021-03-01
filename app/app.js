const express = require("express");

const config = require("./config");
const loader = require("./loader");

function bootstraping() {
  const app = express();
  const server = app.listen(config.server.port);

  server.on("error", onError);
  server.on("listening", function () {
    console.info(
      `Server is running on http://${config.server.host}:${config.server.port}`
    );
    loader(app);
  });
}

function onError() {
  if (serverError.code === "EACCES") {
    console.error(`${config.server.port} requires elevated privileges`);
  } else if (serverError.code === "EADDRINUSE") {
    console.error(`${config.server.port} already in use`);
  } else {
    console.error(serverError);
  }
  process.exit(1);
}

bootstraping();
