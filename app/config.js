const config = {
  server: {
    host: process.env.HOST || "localhost",
    port: process.env.PORT || 5500,
    bcryptRounds: process.env.BCRYPTROUNDS || 10,
  },
  db: {
    uri: process.env.DB_URI,
  },
};

module.exports = config;
