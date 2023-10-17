module.exports = function buildRemoveContractPayablePriceAndDiscount
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
                throw new Error('buildRemoveContractPayablePriceAndDiscount must have getDb.');
            }

        if
        (
            !createOptions
        )
            {
                throw new Error('buildRemoveContractPayablePriceAndDiscount must have createOptions.');
            }

        if
        (
            !translateResponse
        )
            {
                throw new Error('buildRemoveContractPayablePriceAndDiscount must have translateResponse.');
            }

        const COLLECTION_NAME = 'contracts';

        return async function removeContractPayablePriceAndDiscount
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
                        throw new Error('removeContractPayablePriceAndDiscount must have contractId.');
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