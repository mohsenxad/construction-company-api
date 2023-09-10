module.exports = function buildGetAllContractPaymentByContract
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
                throw new Error('buildGetAllContractPaymentByContract must have getDb.');
            }

        if
        (
            !createOptions
        )
            {
                throw new Error('buildGetAllContractPaymentByContract must have createOptions.');
            }

        if
        (
            !translateResponse
        )
            {
                throw new Error('buildGetAllContractPaymentByContract must have translateResponse.');
            }

        const COLLECTION_NAME = 'contractPaymentsFullDetail';

        return async function getAllContractPaymentByContract
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
                        throw new Error('getAllContractPaymentByContract must have contractId.');
                    }

                const db = await getDb();
                
                const collection = db.collection(
                    COLLECTION_NAME
                );

                const options = createOptions(
                    {
                        contractId:contractId
                    }
                );

               const response = await collection.find(
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