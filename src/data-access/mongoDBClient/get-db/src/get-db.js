module.exports = function buildGetDb
(
    {
        MongoClient,
        MONGODB_USERNAME,
        MONGODB_PASSWORD,
        DATABASE_NAME
    }
)
    {
        if
        (
            !MongoClient
        )
            {
                throw new Error('buildGetDb must have MongoClient.');
            }

        if
        (
            !MONGODB_USERNAME
        )
            {
                throw new Error('buildGetDb must have MONGODB_USERNAME.');
            }

        if
        (
            !MONGODB_PASSWORD
        )
            {
                throw new Error('buildGetDb must have MONGODB_PASSWORD.');
            }

        if
        (
            !DATABASE_NAME
        )
            {
                throw new Error('buildGetDb must have DATABASE_NAME.');
            }

        
        var db;
        var client;
        
        const dataBaseConnectionString = `mongodb+srv://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@cluster0.pe1pxdg.mongodb.net/${DATABASE_NAME}`;


        return async function getDb
        ()
            {
                if
                (
                    db
                )
                    {
                        return db;
                    }
                else if
                (
                    !db
                )
                    {
                        try 
                            {
                                client = await MongoClient.connect(
                                    dataBaseConnectionString
                                );

                                console.log(`Connected To ${DATABASE_NAME} DataBase`);

                                db = client.db(
                                    DATABASE_NAME
                                );

                                return db;

                            }
                        catch (error) 
                            {
                                console.log(error);
                            }
                    }

            }
    }