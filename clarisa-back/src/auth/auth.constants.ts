const dotenv = require('dotenv');
dotenv.config();

export const jwtConstants = {
    secret: process.env.JWT_SECRET,
    jwtTime: process.env.JWT_TIME
  };