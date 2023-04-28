require('dotenv').config();

const config = {
  port: process.env.PORT || 3000,
  role: process.env.ROLE,
};

module.exports = { config };
