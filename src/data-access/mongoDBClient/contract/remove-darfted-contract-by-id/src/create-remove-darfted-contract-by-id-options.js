module.exports = function buildCreateRemoveDarftedContractByIdOptions
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
                throw new Error('buildCreateRemoveDarftedContractByIdOptions must have ObjectId.');
            }

        return function createRemoveDarftedContractByIdOptions
        (
            {
                contractId
            }
        )
            {

                if
                (
                    !contractId
                )
                    {
                        throw new Error('createRemoveDarftedContractByIdOptions must have contractId.');
                    }

                const contractObjectId = new ObjectId(
                    contractId
                );

                const filter = {
                    "_id": contractObjectId,
                    "isDraft":true
                };

                const options  = {
                    filter: filter
                };
                
                return options;
            }
    }