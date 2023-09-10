module.exports = function buildGetProjectItemByContractId
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
                throw new Error('buildGetProjectById must have getDb.');
            }

        if
        (
            !createOptions
        )
            {
                throw new Error('buildGetProjectById must have createOptions.');
            }

        if
        (
            !translateResponse
        )
            {
                throw new Error('buildGetProjectById must have translateResponse.');
            }

        const COLLECTION_NAME = 'contracts';
        
        return async function getProjectItemByContractId
        (
            {
                contractId
            }
        )
            {
                const db = await getDb();
                
                const collection = db.collection(
                    COLLECTION_NAME
                );

                const options = createOptions(
                    {
                        contractId: contractId
                    }
                );

                const response = await collection.aggregate(
                    options.pipeline
                ).toArray();

                const result = translateResponse(
                    {
                        response: response
                    }
                );

                return result;
            }
    }