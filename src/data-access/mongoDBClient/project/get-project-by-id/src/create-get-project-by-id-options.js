module.exports = function buildCreateGetProjectByIdOptions
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
                throw new Error('buildCreateGetProjectByIdOptions must have ObjectId.');
            }
        return function createGetProjectByIdOptions
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
                        throw new Error('createGetProjectByIdOptions must have projectId.');
                    }

                const projectObjectId = new ObjectId(
                    projectId
                );

                const filter = {
                    "_id": projectObjectId
                };

                const options = {
                    filter: filter
                }
                
                return options;
            }
    }