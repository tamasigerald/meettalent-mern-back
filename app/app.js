const express = require("express");

const config = require("./config");
// const loader = require('');

function bootstraping() {
  const app = express();
  const server = app.listen(config.server.port);

  server.on("error", onError);
  server.on("listening", function () {
    console.info(
      `Server is running on http://${config.server.host}:${config.server.port}`
    );
    // loader(app);
  });
}

function onError() {
  console.log("Error");
}

bootstraping();
