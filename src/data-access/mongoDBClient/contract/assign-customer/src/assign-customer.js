module.exports = function buildAssignCustomer
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
                throw new Error('buildAssignCustomer must have getDb.');
            }

        if
        (
            !createOptions
        )
            {
                throw new Error('buildAssignCustomer must have createOptions.');
            }

        if
        (
            !translateResponse
        )
            {
                throw new Error('buildAssignCustomer must have translateResponse.');
            }

        const COLLECTION_NAME = 'contracts';

        return async function assignCustomer
        (
            {
                contractId,
                customerId
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
                        customerId: customerId
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