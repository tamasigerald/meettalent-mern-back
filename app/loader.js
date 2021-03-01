const mongooseLoader = require("./loaders/mongooseLoader");
const expressLoader = require("./loaders/expressLoader");
// const passportLoader = require('./loaders/passportLoader');

function loader(app) {
  mongooseLoader
    .then(function () {
      console.info("Database connect");
      //   passportLoader(app);
      //   console.info('Passport set');
      expressLoader(app);
      console.info("Express middleware registered");
    })
    .catch(function (err) {
      console.error(err.message);
      throw err;
    });
}

module.exports = loader;
