const config = {
  server: {
    host: process.env.HOST || "localhost",
    port: process.env.PORT || 5500,
    bcryptRounds: Number.parseInt(process.env.BCRYPTROUNDS) || 10,
    secret: process.env.SECRET || 'goldencat',
    jwtExpiration: process.env.JWTEXPIRE ||'120s',
  },
  db: {
    uri: process.env.DB_URI,
  },
};

module.exports = config;
