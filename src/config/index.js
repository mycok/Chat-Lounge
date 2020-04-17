const config = {
  env: process.env.NODE_ENV,
  port: process.env.PORT || 4000,
  mongoURI: () => {
    if (process.env.NODE_ENV === 'development') {
      return `${process.env.MONGO_HOST}://${process.env.MONGO_IP}:${process.env.MONGO_PORT}/${process.env.DEV_DB}`;
    }
    if (process.env.NODE_ENV === 'test') {
      return `${process.env.MONGO_HOST}://${process.env.IP}:${process.env.MONGO_PORT}/${process.env.TEST_DB}`;
    }
    return process.env.MONGODB_URI;
  },
};

export default config;
