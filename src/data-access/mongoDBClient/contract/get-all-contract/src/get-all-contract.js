module.exports = function buildGetAllContract
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
                throw new Error('buildGetAllContract must have getDb.');
            }

        if
        (
            !createOptions
        )
            {
                throw new Error('buildGetAllContract must have createOptions.');
            }

        if
        (
            !translateResponse
        )
            {
                throw new Error('buildGetAllContract must have translateResponse.');
            }

        const COLLECTION_NAME = 'contractsFullDetail';

        return async function getAllContract
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
                        throw new Error('getAllContract must have companyId.');
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