module.exports = function buildGetAllBank
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
                throw new Error('buildGetAllBank must have getDb.');
            }

        if
        (
            !createOptions
        )
            {
                throw new Error('buildGetAllBank must have createOptions.');
            }

        if
        (
            !translateResponse
        )
            {
                throw new Error('buildGetAllBank must have translateResponse.');
            }

        const COLLECTION_NAME = 'banks';

        return async function GetAllBank
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