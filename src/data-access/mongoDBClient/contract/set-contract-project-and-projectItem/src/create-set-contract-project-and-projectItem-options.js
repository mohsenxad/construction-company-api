module.exports = function buildCreateSetContractProjectAndProjectItemOptions
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
                throw new Error('buildCreateSetContractProjectAndProjectItemOptions must have ObjectId.');
            }
        return function createSetContractProjectAndProjectItemOptions
        (
            {
                contractId,
                projectId,
                projectItemId,
            }
        )
            {

                if
                (
                    !contractId
                )
                    {
                        throw new Error('createSetContractProjectAndProjectItemOptions must have contractId.');
                    }

                if
                (
                    !projectId
                )
                    {
                        throw new Error('createSetContractProjectAndProjectItemOptions must have projectId.');
                    }

                if
                (
                    !projectItemId
                )
                    {
                        throw new Error('createSetContractProjectAndProjectItemOptions must have projectItemId.');
                    }

                const contractObjectId = new ObjectId(
                    contractId
                );

                const projectObjectId = new ObjectId(
                    projectId
                );

                const projectItemObjectId = new ObjectId(
                    projectItemId
                );

                const filter = {
                    "_id": contractObjectId
                };

                const update = {
                    $set: {
                        project: projectObjectId,
                        projectItem:projectItemObjectId,
                    }
                }
                
                const options = {
                    filter:filter,
                    update: update,
                }
                
                return options;
            }
    }