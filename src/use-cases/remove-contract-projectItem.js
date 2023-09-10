module.exports = function buildRemoveContractProjectItem
(
    {
        removeContractProjectItemDB
    }
)
    {
        if
        (
            !removeContractProjectItemDB
        )
            {
                throw new Error('buildRemoveContractProjectItem must have removeContractProjectItemDB.');
            }

        return async function removeContractProjectItem
        (
            {
                removeProjectItemInfo
            }
        )
            {

                const contractId = removeProjectItemInfo.contractId;

                const removeContractProjectItemDBResult = await removeContractProjectItemDB(
                    {
                        contractId: contractId
                    }
                );

                return removeContractProjectItemDBResult;

            }
    }