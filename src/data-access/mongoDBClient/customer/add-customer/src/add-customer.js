module.exports = function buildAddCustomer
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
                throw new Error('buildAddCustomer must have getDb.');
            }

        if
        (
            !createOptions
        )
            {
                throw new Error('buildAddCustomer must have createOptions.');
            }

        if
        (
            !translateResponse
        )
            {
                throw new Error('buildAddCustomer must have translateResponse.');
            }

        const COLLECTION_NAME = 'customers';

        return async function addCustomer
        (
            {
                customer
            }
        )
            {
                if
                (
                    !customer
                )
                    {
                        throw new Error('addCustomer must have customer.');
                    }

                const db = await getDb();

                const collection = db.collection(
                    COLLECTION_NAME
                );

                const options = createOptions(
                    {
                        customer: customer
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