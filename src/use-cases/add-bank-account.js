module.exports = function buildAddBankAccount
(
    {
        addBankAccountDB,
        makeBankAccount
    }
)
    {
        if
        (
            !addBankAccountDB
        )
            {
                throw new Error('buildAddBankAccount must have addBankAccountDB.');
            }

        if
        (
            !makeBankAccount
        )
            {
                throw new Error('buildAddBankAccount must have makeBankAccount.');
            }

        return async function addBankAccount
        (
            {
                bankAccountInfo
            }
        )
            {
                if
                (
                    !bankAccountInfo
                )
                    {
                        throw new Error('addBankAccount must have bankAccountInfo.');
                    }
                
                const bankAccount = await makeBankAccount(
                    bankAccountInfo
                );

                const addBankAccountDBResult = await addBankAccountDB(
                    {
                        bankAccount:bankAccount
                    }
                );

                return addBankAccountDBResult;

            }
    }