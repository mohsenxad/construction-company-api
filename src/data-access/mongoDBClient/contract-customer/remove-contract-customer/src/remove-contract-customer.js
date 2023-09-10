module.exports = function buildRemoveContractCustomer
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
                throw new Error('buildRemoveContractCustomer must have getDb.');
            }

        if
        (
            !createOptions
        )
            {
                throw new Error('buildRemoveContractCustomer must have createOptions.');
            }

        if
        (
            !translateResponse
        )
            {
                throw new Error('buildRemoveContractCustomer must have translateResponse.');
            }
          
        const COLLECTION_NAME = 'contractCustomers';
        
        return async function removeContractCustomer
        (
            {
                contractCustomerId
            }
        )
            {
                if
                (
                    !contractCustomerId
                )
                    {
                        throw new Error('removeContractCustomer must have contractCustomerId.');
                    }

                const db = await getDb();
                
                const collection = db.collection(
                    COLLECTION_NAME
                );

                const options = createOptions(
                    {
                        contractCustomerId: contractCustomerId
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