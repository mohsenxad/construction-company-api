module.exports =  function(
    {
        mongoDb_credentials,
    }
)
    {

        const mongoDBDataClient = require('./mongoDBClient')
        (
            {
                MONGODB_USERNAME: mongoDb_credentials.MONGODB_USERNAME,
                MONGODB_PASSWORD: mongoDb_credentials.MONGODB_PASSWORD,
                DATABASE_NAME: mongoDb_credentials.DATABASE_NAME
            }
        );

        const services = Object.freeze(
            {
                mongo: mongoDBDataClient
            }
        ); 

        return services;
    }