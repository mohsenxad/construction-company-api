module.exports = function buildRemoveContractProjectItem
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
                throw new Error('buildRemoveContractProjectItem must have getDb.');
            }

        if
        (
            !createOptions
        )
            {
                throw new Error('buildRemoveContractProjectItem must have createOptions.');
            }

        if
        (
            !translateResponse
        )
            {
                throw new Error('buildRemoveContractProjectItem must have translateResponse.');
            }

        const COLLECTION_NAME = 'contracts';

        return async function removeContractProjectItem
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