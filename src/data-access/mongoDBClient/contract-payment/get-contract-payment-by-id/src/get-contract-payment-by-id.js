module.exports = function buildGetContractPaymentById
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
                throw new Error('buildGetContractPaymentById must have getDb.');
            }

        if
        (
            !createOptions
        )
            {
                throw new Error('buildGetContractPaymentById must have createOptions.');
            }

        if
        (
            !translateResponse
        )
            {
                throw new Error('buildGetContractPaymentById must have translateResponse.');
            }

        const COLLECTION_NAME = 'contractPaymentsFullDetail';

        return async function getContractPaymentById
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
                        throw new Error('getContractPaymentById must have contractPaymentId.');
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

                const response = await collection.findOne(
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