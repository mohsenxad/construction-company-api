module.exports = function buildCreateGetAllContractByProjectOptions
(
    {
        ObjectId
    }
)
    {
        if
        (
            !ObjectId
        )
            {
                throw new Error('buildCreateGetAllContractByProjectOptions must have ObjectId.');
            }

        return function createGetAllContractByProjectOptions
        (
            {
                projectId
            }
        )
            {

                const projectObjectId = new ObjectId(
                    projectId
                );


                const filter = {
                    projectId: projectObjectId
                }


                const options = {
                    filter: filter
                }

                return options;
            }
    }