module.exports = function buildAddBankAccount
(
    {
        getDb,
        createAddBankAccountOptions,
        translateAddBankAccountResponse
    }
)
    {
        if
        (
            !getDb
        )
            {
                throw new Error('buildAddBankAccount must have getDb.');
            }

        if
        (
            !createAddBankAccountOptions
        )
            {
                throw new Error('buildAddBankAccount must have createAddBankAccountOptions.');
            }

        if
        (
            !translateAddBankAccountResponse
        )
            {
                throw new Error('buildAddBankAccount must have translateAddBankAccountResponse.');
            }

        const COLLECTION_NAME = 'bankAccounts';

        return async function addBankAccount
        (
            {
                bankAccount
            }
        )
            {
                if
                (
                    !bankAccount
                )
                    {
                        throw new Error('addBankAccount must have bankAccount.');
                    }

                const db = await getDb();

                const collection = db.collection(
                    COLLECTION_NAME
                );

                const options = createAddBankAccountOptions(
                    {
                        bankAccount: bankAccount
                    }
                );

                const response = await collection.insertOne(
                    options.document
                );

                const result = translateAddBankAccountResponse(
                    {
                        response: response
                    }
                );

                return result;
            }
    }