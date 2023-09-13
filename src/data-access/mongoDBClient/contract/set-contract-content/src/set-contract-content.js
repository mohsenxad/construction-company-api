module.exports = function buildSetContractContent
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
                throw new Error('buildSetContractContent must have getDb.');
            }

        if
        (
            !createOptions
        )
            {
                throw new Error('buildSetContractContent must have createOptions.');
            }

        if
        (
            !translateResponse
        )
            {
                throw new Error('buildSetContractContent must have translateResponse.');
            }

        const COLLECTION_NAME = 'contracts';

        return async function setContractContent
        (
            {
                contractId,
                content
            }
        )
            {
                const db = await getDb();
                
                const collection = db.collection(
                    COLLECTION_NAME
                );

                const options = createOptions(
                    {
                        contractId: contractId,
                        content: content
                    }
                );

                const response = await collection.updateOne(
                    options.filter,
                    options.update
                );

                const result = translateResponse(
                    {
                        response: response
                    }
                );

                return result;
            }
    }