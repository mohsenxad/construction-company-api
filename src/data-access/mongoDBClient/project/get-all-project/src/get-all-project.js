module.exports = function buildGetAllProject
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
                throw new Error('buildGetAllProject must have getDb.');
            }

        if
        (
            !createOptions
        )
            {
                throw new Error('buildGetAllProject must have createOptions.');
            }

        if
        (
            !translateResponse
        )
            {
                throw new Error('buildGetAllProject must have translateResponse.');
            }

        const COLLECTION_NAME = 'projects';

        return async function getAllProject
        (
            {
                companyId
            }
        )
            {

                if
                (
                    !companyId
                )
                    {
                        throw new Error('getAllProject must have companyId.');
                    }

                const db = await getDb();
                
                const collection = db.collection(
                    COLLECTION_NAME
                );

                const options = createOptions(
                    {
                        companyId: companyId
                    }
                );

                const response = await collection.aggregate(
                    options.pipeline
                );

                const result = translateResponse(
                    {
                        response: response
                    }
                );

                return result;
            }
    }