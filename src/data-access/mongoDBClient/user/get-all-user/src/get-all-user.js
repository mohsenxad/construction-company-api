module.exports = function buildGetAllUser
(
    {
        getDb,
        createOptions,
        translateResponse
    }
)
    {
        if
        (
            !getDb
        )
            {
                throw new Error('buildGetAllUser must have getDb.');
            }

        if
        (
            !createOptions
        )
            {
                throw new Error('buildGetAllUser must have createOptions.');
            }

        if
        (
            !translateResponse
        )
            {
                throw new Error('buildGetAllUser must have translateResponse.');
            }

        const COLLECTION_NAME = 'users';

        return async function getAllUser
        ()
            {

                const db = await getDb();
                
                const collection = db.collection(
                    COLLECTION_NAME
                );

                const options = createOptions();

                const response = await collection.find(
                    options.filter
                );

                const result = translateResponse(
                    {
                        response: response
                    }
                );

                return result;
            }
    }