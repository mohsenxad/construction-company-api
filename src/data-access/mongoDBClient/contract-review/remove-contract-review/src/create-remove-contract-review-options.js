module.exports = function buildCreateRemoveContractReviewOptions
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
                throw new Error('buildCreateRemoveContractReviewOptions must have ObjectId.');
            }
        return function createRemoveContractReviewOptions
        (
            {
                contractReviewId
            }
        )
            {
                if
                (
                    !contractReviewId
                )
                    {
                        throw new Error('createRemoveContractReviewOptions must have contractReviewId.');
                    }

                const contractReviewObjectId = new ObjectId(
                    contractReviewId
                );

                const filter = {
                    "_id": contractReviewObjectId
                };

                const options  = {
                    filter: filter
                }
                
                return options;
            }
    }