module.exports = function buildEditCustomer
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
                throw new Error('buildEditCustomer must have getDb.');
            }

        if
        (
            !createOptions
        )
            {
                throw new Error('buildEditCustomer must have createOptions.');
            }

        if
        (
            !translateResponse
        )
            {
                throw new Error('buildEditCustomer must have translateResponse.');
            }

        const COLLECTION_NAME = 'customers';

        return async function editCustomer
        (
            {
                customerId,
                customer
            }
        )
            {
                if
                (
                    !customerId
                )
                    {
                        throw new Error('editCustomer must have customerId.');
                    }

                if
                (
                    !customer
                )
                    {
                        throw new Error('editCustomer must have customer.');
                    }

                const db = await getDb();
                
                const collection = db.collection(
                    COLLECTION_NAME
                );

                const options = createOptions(
                    {
                        customerId: customerId,
                        customer: customer
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