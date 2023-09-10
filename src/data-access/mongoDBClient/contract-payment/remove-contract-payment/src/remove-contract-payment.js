module.exports = function buildRemoveContractPayment
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
                throw new Error('buildRemoveContractPayment must have getDb.');
            }

        if
        (
            !createOptions
        )
            {
                throw new Error('buildRemoveContractPayment must have createOptions.');
            }

        if
        (
            !translateResponse
        )
            {
                throw new Error('buildRemoveContractPayment must have translateResponse.');
            }
          
        const COLLECTION_NAME = 'contractPayments';
        
        return async function removeContractPayment
        (
            {
                contractPaymentId
            }
        )
            {
                if
                (
                    !contractPaymentId
                )
                    {
                        throw new Error('removeContractPayment must have contractPaymentId.');
                    }

                const db = await getDb();
                
                const collection = db.collection(
                    COLLECTION_NAME
                );

                const options = createOptions(
                    {
                        contractPaymentId: contractPaymentId
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