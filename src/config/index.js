const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 4000,
  mongoURI: process.env.MONGODB_URI || `${process.env.MONGO_HOST || 'mongodb'}://${process.env.IP || 'localhost'}:${process.env.MONGO_PORT || '27017'}/${process.env.DB_NAME || 'chat-lounge'}`,
};

export default config;
