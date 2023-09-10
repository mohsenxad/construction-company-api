module.exports = function buildGetProjectItemByContractId
(
    {
        getProjectItemByContractDB
    }
)
    {
        if
        (
            !getProjectItemByContractDB
        )
            {
                throw new Error('buildGetProjectItemByContractId must have getProjectItemByContractDB.');
            }
        return async function getProjectItemByContractId
        (
            {
                contractId
            }
        )
            {
                if
                (
                    !contractId
                )
                    {
                        throw new Error('getProjectItemByContractId must have contractId.');
                    }

                const getProjectItemByContractDBResult = await getProjectItemByContractDB(
                    {
                        contractId: contractId
                    }
                );

                return getProjectItemByContractDBResult;
            }
    }