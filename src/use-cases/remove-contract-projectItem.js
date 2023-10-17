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

                if
                (
                    !removeProjectItemInfo
                )
                    {
                        throw new Error('removeContractProjectItem must have removeProjectItemInfo.');
                    }
                else if
                (
                    !removeProjectItemInfo.contractId 
                )
                    {
                        throw new Error('removeContractProjectItem removeProjectItemInfo must have contractId.');
                    }

                const contractId = removeProjectItemInfo.contractId;

                const removeContractProjectItemDBResult = await removeContractProjectItemDB(
                    {
                        contractId: contractId
                    }
                );

                return removeContractProjectItemDBResult;

            }
    }