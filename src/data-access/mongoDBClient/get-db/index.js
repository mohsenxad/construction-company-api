const buildGetDb = require('./src/get-db');

module.exports = function(
    {
        MongoClient,
        MONGODB_USERNAME,
        MONGODB_PASSWORD,
        DATABASE_NAME
    }
)
    {
        const getDb = buildGetDb(
            {
                MongoClient: MongoClient,
                MONGODB_USERNAME: MONGODB_USERNAME,
                MONGODB_PASSWORD: MONGODB_PASSWORD,
                DATABASE_NAME: DATABASE_NAME
            }
        );

        return Object.freeze(
            {
                getDb
            }
        )
    }