const bodyParser = require("body-parser");

const routes = require("../routes");

function expressLoader(app) {
  app.use(bodyParser.json());

  app.use(routes);

  app.use(function (req, res) {
    res.status(404).json({ error: "Not found" });
  });

  app.use(function (err, req, res, next) {
    res.status(500).json({ error: err.message });
  });
}

module.exports = expressLoader;
