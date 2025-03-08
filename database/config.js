const config = {
  db: {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'circular_economy',
    port: process.env.DB_PORT || 3306,
  },
  server: {
    port: process.env.PORT || 5000,
  },
};

module.exports = config;