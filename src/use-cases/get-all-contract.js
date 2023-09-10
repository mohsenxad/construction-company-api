module.exports = function buildGetAllContracts
(
    {
        getAllContractDB,
    }
)
    {
        
        if
        (
            !getAllContractDB
        )
            {
                throw new Error('buildGetAllContracts must have getAllContractDB.');
            }

        return async function getAllContracts
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
                        throw new Error('getAllContracts must have companyId.');
                    }

                const getAllContractDBResult = await getAllContractDB(
                    {
                        companyId: companyId
                    }
                );

                return getAllContractDBResult;
                
            }
    }