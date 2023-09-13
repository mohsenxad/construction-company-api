module.exports = function buildCreateSetContractContentOptions
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
                throw new Error('buildCreateSetContractContentOptions must have ObjectId.');
            }

        return function createSetContractContentOptions
        (
            {
                contractId,
                content
            }
        )
            {
                if
                (
                    !contractId
                )
                    {
                        throw new Error('createSetContractContentOptions must have contractId.');
                    }

                if
                (
                    !content
                )
                    {
                        throw new Error('createSetContractContentOptions must have content.');
                    }

                const contractObjectId = new ObjectId(
                    contractId
                );

                const filter = {
                    "_id": contractObjectId
                };

                const update = {
                    $set: {
                        content: content
                    }
                }
                
                const options = {
                    filter:filter,
                    update: update,
                }
                
                return options;
                
            }
    }