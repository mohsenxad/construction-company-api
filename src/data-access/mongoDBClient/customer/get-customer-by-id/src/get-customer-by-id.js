module.exports = function buildGetCustomerById
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
                throw new Error('buildGetCustomerById must have getDb.');
            }

        if
        (
            !createOptions
        )
            {
                throw new Error('buildGetCustomerById must have createOptions.');
            }

        if
        (
            !translateResponse
        )
            {
                throw new Error('buildGetCustomerById must have translateResponse.');
            }

        const COLLECTION_NAME = 'customers';

        return async function getCustomerById
        (
            {
                customerId
            }
        )
            {
                if
                (
                    !customerId
                )
                    {
                        throw new Error('getCustomerById must have customerId.');
                    }
                    
                const db = await getDb();
                
                const collection = db.collection(
                    COLLECTION_NAME
                );

                const options = createOptions(
                    {
                        customerId: customerId
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