const dotenv = require('dotenv');
const path = require('path');
// Load environment variables from .env file

dotenv.config({ path: path.join(__dirname, '../.env') });

// Configuration object

module.exports = {
    // Database configuration
  db_uri: process.env.DB_URI,

  // Server configuration
  port: process.env.PORT || 3000,
  mode: process.env.NODE_ENV || 'development',

    // JWT configuration
  jwt_secret: process.env.JWT_SECRET || 'abuzar123',
  jwt_expiration: process.env.JWT_EXPIRATION || '90d',


};