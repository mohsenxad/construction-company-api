module.exports = function buildGetAllCompany
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
                throw new Error('buildGetAllCompany must have getDb.');
            }

        if
        (
            !createOptions
        )
            {
                throw new Error('buildGetAllCompany must have createOptions.');
            }

        if
        (
            !translateResponse
        )
            {
                throw new Error('buildGetAllCompany must have translateResponse.');
            }

        const COLLECTION_NAME = 'companies';

        return async function getAllCompany
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