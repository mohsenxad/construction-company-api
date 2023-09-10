module.exports = function buildSetContractPayablePriceAndDiscount
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
                throw new Error('buildSetContractPayablePriceAndDiscount must have getDb.');
            }

        if
        (
            !createOptions
        )
            {
                throw new Error('buildSetContractPayablePriceAndDiscount must have createOptions.');
            }

        if
        (
            !translateResponse
        )
            {
                throw new Error('buildSetContractPayablePriceAndDiscount must have translateResponse.');
            }

        const COLLECTION_NAME = 'contracts';

        return async function setContractPayablePriceAndDiscount
        (
            {
                contractId,
                payablePrice,
                discount,
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
                        payablePrice: payablePrice,
                        discount: discount,
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