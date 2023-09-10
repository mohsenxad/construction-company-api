module.exports = function buildGetAllContractType
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
                throw new Error('buildGetAllContractType must have getDb.');
            }

        if
        (
            !createOptions
        )
            {
                throw new Error('buildGetAllContractType must have createOptions.');
            }

        if
        (
            !translateResponse
        )
            {
                throw new Error('buildGetAllContractType must have translateResponse.');
            }

        const COLLECTION_NAME = 'contractTypes';

        return async function getAllContractType
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