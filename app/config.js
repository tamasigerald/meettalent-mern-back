const config = {
  server: {
    host: process.env.HOST || "localhost",
    port: process.env.PORT || 5500,
    bcryptRounds: Number.parseInt(process.env.BCRYPTROUNDS) || 10,
    secret: process.env.SECRET || 'goldencat',
    jwtExpiration: process.env.JWTEXPIRE || '120s',
  },
  db: {
    uri: process.env.DB_URI,
  },
  passport: {
    google: {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clienteSecret: process.env.GOOGLE_CLIENT_SECRET,
      registerCallbackURL: process.env.GOOGLE_REGISTER_CB,
      loginCallbackURL: process.env.GOOGLE_LOGIN_CB,
    }
  }

};

module.exports = config;
