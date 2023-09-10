module.exports = function buildGetUserById
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
                throw new Error('buildGetUserById must have getDb.');
            }

        if
        (
            !createOptions
        )
            {
                throw new Error('buildGetUserById must have createOptions.');
            }

        if
        (
            !translateResponse
        )
            {
                throw new Error('buildGetUserById must have translateResponse.');
            }

        const COLLECTION_NAME = 'users';

        return async function getUserById
        (
            {
                userId  
            }
        )
            {

                const db = await getDb();
                
                const collection = db.collection(
                    COLLECTION_NAME
                );

                const options = createOptions(
                    {
                        userId: userId
                    }
                );

                const response = await collection.findOne(
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