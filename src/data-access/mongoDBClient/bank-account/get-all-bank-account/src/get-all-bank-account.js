module.exports = function buildGetAllBankAccount
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
                throw new Error('buildGetAllBankAccount must have getDb.');
            }

        if
        (
            !createOptions
        )
            {
                throw new Error('buildGetAllBankAccount must have createOptions.');
            }

        if
        (
            !translateResponse
        )
            {
                throw new Error('buildGetAllBankAccount must have translateResponse.');
            }

        const COLLECTION_NAME = 'bankAccounts';

        return async function getAllBankAccount
        (
            {
                companyId
            }
        )
            {

                if
                (
                    !companyId
                )
                    {
                        throw new Error('getAllBankAccount must have companyId.');
                    }

                const db = await getDb();
                
                const collection = db.collection(
                    COLLECTION_NAME
                );

                const options = createOptions(
                    {
                        companyId: companyId
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