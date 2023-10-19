module.exports = function buildCreateGetUserByIdOptions
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
                throw new Error('buildCreateGetUserByIdOptions must have ObjectId.');
            }
        return function createGetUserByIdOptions
        (
            {
                userId
            }
        )
            {
                if
                (
                    !userId
                )
                    {
                        throw new Error('createGetUserByIdOptions must have userId.');
                    }

                const userObjectId = new ObjectId(
                    userId
                );

                const filter = {
                    "_id": userObjectId
                };

                const options = {
                    filter: filter
                };
                
                return options;
            }
    }