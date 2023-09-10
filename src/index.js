process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
const useCaseServices = require('./use-cases')(
   {
      mongoDb_credentials: {
         MONGODB_USERNAME: process.env.MONGODB_USERNAME,
         MONGODB_PASSWORD:process.env.MONGODB_PASSWORD,
         DATABASE_NAME: process.env.DATABASE_NAME
      },
      JWT_SECRET: process.env.JWT_SECRET,
   }
);
module.exports = useCaseServices;