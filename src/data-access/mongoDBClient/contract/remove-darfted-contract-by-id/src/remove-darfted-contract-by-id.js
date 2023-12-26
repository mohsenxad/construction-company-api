module.exports = function buildRemoveDarftedContractById
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
                throw new Error('buildRemoveDarftedContractById must have getDb.');
            }

        if
        (
            !createOptions
        )
            {
                throw new Error('buildRemoveDarftedContractById must have createOptions.');
            }

        if
        (
            !translateResponse
        )
            {
                throw new Error('buildRemoveDarftedContractById must have translateResponse.');
            }
          
        const COLLECTION_NAME = 'contracts';

        return async function removeDarftedContractById
        (
            {
                contractId
            }
        )
            {
                if
                (
                    !contractId
                )
                    {
                        throw new Error('removeDarftedContractById must have contractId.');
                    }

                const db = await getDb();
                
                const collection = db.collection(
                    COLLECTION_NAME
                );

                const options = createOptions(
                    {
                        contractId: contractId
                    }
                );

                const response = await collection.deleteOne(
                    options.filter
                )

                const result = translateResponse(
                    {
                        response: response
                    }
                );

                return result;
            }
    }