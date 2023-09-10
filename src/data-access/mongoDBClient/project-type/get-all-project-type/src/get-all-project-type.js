module.exports = function buildGetAllProjectType
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
                throw new Error('buildGetAllProjectType must have getDb.');
            }

        if
        (
            !createOptions
        )
            {
                throw new Error('buildGetAllProjectType must have createOptions.');
            }

        if
        (
            !translateResponse
        )
            {
                throw new Error('buildGetAllProjectType must have translateResponse.');
            }

        const COLLECTION_NAME = 'projectTypes';

        return async function getAllProjectType
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