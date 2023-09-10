module.exports = function buildCreateAddBankAccountOptions
()
    {
        return function createAddBankAccountOptions
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
                        throw new Error('createAddBankAccountOptions must have bankAccount');
                    }
                
                const document = bankAccount.toBson()

                const options = {
                    document: document
                };

                return options;
            }
    }