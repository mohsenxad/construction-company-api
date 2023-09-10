module.exports = function buildSetContractProjectAndProjectItem
(
    {
        setContractProjectAndProjectItemDB
    }
)
    {
        if
        (
            !setContractProjectAndProjectItemDB
        )
            {
                throw new Error('buildSetContractProjectAndProjectItem must have setContractProjectAndProjectItemDB.');
            }

        return async function setContractProjectAndProjectItem
        (
            {
                setProjectAndProjectItemInfo
            }
        )
            {
                const contractId = setProjectAndProjectItemInfo.contractId;
                const projectId = setProjectAndProjectItemInfo.projectId;
                const projectItemId = setProjectAndProjectItemInfo.projectItemId;

                const setContractProjectAndProjectItemDBResult = await setContractProjectAndProjectItemDB(
                    {
                        contractId: contractId,
                        projectId: projectId,
                        projectItemId: projectItemId
                    }
                );

                return setContractProjectAndProjectItemDBResult;
            }
    }