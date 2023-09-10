module.exports = function buildGetAllBanks
(
    {
        getAllBankDB,
    }
)
    {
        if
        (
            !getAllBankDB
        )
            {
                throw new Error('buildGetAllBanks must have getAllBankDB.');
            }

        return async function getAllBanks
        ()
            {

                const getAllBankDBResult = await getAllBankDB();

                return getAllBankDBResult;

            }
    }