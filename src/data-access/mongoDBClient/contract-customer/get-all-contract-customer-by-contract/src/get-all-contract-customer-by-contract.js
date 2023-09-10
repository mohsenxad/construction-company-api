module.exports = function buildGetAllContractCustomerByContract
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
                throw new Error('buildGetAllContractCustomerByContract must have getDb.');
            }

        if
        (
            !createOptions
        )
            {
                throw new Error('buildGetAllContractCustomerByContract must have createOptions.');
            }

        if
        (
            !translateResponse
        )
            {
                throw new Error('buildGetAllContractCustomerByContract must have translateResponse.');
            }

        const COLLECTION_NAME = 'contractCustomers';
        return async function getAllContractCustomerByContract
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
                        throw new Error('getAllContractCustomerByContract must have contractId.');
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

                const response = await collection.aggregate(
                    options.pipeline
                )

                const result = translateResponse(
                    {
                        response: response
                    }
                );

                return result;
            }
    }