module.exports = function buildCreateRemoveProjectOptions
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
                throw new Error('buildCreateRemoveProjectOptions must have ObjectId.');
            }
        return function createRemoveProjectOptions
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
                        throw new Error('createRemoveProjectOptions must have projectId.');
                    }

                const projectObjectId = new ObjectId(
                    projectId
                );

                const filter = {
                    "_id": projectObjectId
                };

                const options  = {
                    filter: filter
                }
                
                return options;
            }
    }