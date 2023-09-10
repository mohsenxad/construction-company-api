module.exports = function buildGetAllBankAccounts
(
    {
        getAllBankAccountDB,
    }
)
    {
        if
        (
            !getAllBankAccountDB
        )
            {
                throw new Error('buildGetAllBankAccounts must have getAllBankAccountDB.');
            }

        return async function getAllBankAccounts
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
                        throw new Error('getAllBankAccounts must have companyId.');
                    }
                const getAllBankAccountDBResult = await getAllBankAccountDB(
                    {
                        companyId: companyId
                    }
                );

                return getAllBankAccountDBResult;

            }
    }