module.exports = function buildGetAllContractByProject
(
    {
        getAllContractByProjectDB
    }
)
    {
        if
        (
            !getAllContractByProjectDB
        )
            {
                throw new Error('buildGetAllContractByProject must have getAllContractByProjectDB.');
            }
        return async function getAllContractByProject
        (
            {
                projectId
            }
        )
            {
                if
                (
                    !projectId
                )
                    {
                        throw new Error('getAllContractByProjectSortByContractDate must have projectId.');
                    }

                const getAllContractByProjectDBResult = await getAllContractByProjectDB(
                    {
                        projectId: projectId
                    }
                );

                return getAllContractByProjectDBResult;
            }
    }