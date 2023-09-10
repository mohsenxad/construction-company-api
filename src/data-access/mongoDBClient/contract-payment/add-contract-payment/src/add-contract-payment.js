module.exports = function buildAddContractPayment
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
                throw new Error('buildAddContractPayment must have getDb.');
            }

        if
        (
            !createOptions
        )
            {
                throw new Error('buildAddContractPayment must have createOptions.');
            }

        if
        (
            !translateResponse
        )
            {
                throw new Error('buildAddContractPayment must have translateResponse.');
            }

        const COLLECTION_NAME = 'contractPayments';

        return async function addContractPayment
        (
            {
                contractPayment
            }
        )
            {
                if
                (
                    !contractPayment
                )
                    {
                        throw new Error('addContractPayment must have contractPayment.');
                    }

                const db = await getDb();

                const collection = db.collection(
                    COLLECTION_NAME
                );

                const options = createOptions(
                    {
                        contractPayment: contractPayment
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