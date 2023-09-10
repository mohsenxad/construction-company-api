module.exports = function buildAddContractCustomer
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
                throw new Error('buildAddContractCustomer must have getDb.');
            }

        if
        (
            !createOptions
        )
            {
                throw new Error('buildAddContractCustomer must have createOptions.');
            }

        if
        (
            !translateResponse
        )
            {
                throw new Error('buildAddContractCustomer must have translateResponse.');
            }

        const COLLECTION_NAME = 'contractCustomers';

        return async function addContractCustomer
        (
            {
                contractCustomer
            }
        )
            {
                if
                (
                    !contractCustomer
                )
                    {
                        throw new Error('addContractCustomer must have contractCustomer');
                    }
                
                const db = await getDb();

                const collection = db.collection(
                    COLLECTION_NAME
                );

                const options = createOptions(
                    {
                        contractCustomer: contractCustomer
                    }
                );

                const response = await collection.insertOne(
                    options.document
                );

                const result = translateResponse(
                    {
                        response: response
                    }
                );

                return result;
            }
    }