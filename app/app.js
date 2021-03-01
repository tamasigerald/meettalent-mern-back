const express = require("express");

const config = require("./config");
// const loader = require('');

function bootstraping() {
  const app = express();
  const server = app.listen(config.server.port);
}
