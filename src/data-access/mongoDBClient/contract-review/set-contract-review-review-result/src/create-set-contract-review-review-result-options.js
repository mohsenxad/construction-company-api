module.exports = function buildCreateSetContractReviewReviewResultOptions
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
                throw new Error('buildCreateSetContractReviewReviewResultOptions must have ObjectId.');
            }
        return function createSetContractReviewReviewResultOptions
        (
            {
                contractReviewId,
                isApproved,
                isRejected,
            }
        )
            {

                if
                (
                    !contractReviewId
                )
                    {
                        throw new Error('createSetContractReviewReviewResultOptions must have contractReviewId.');
                    }


                const contractReviewObjectId = new ObjectId(
                    contractReviewId
                );


                const filter = {
                    "_id": contractReviewObjectId
                };

                const update = {
                    $set: {
                        isReviewed:true,
                        isApproved: isApproved,
                        isRejected:isRejected,
                        reviewDateTime: new Date()
                    }
                }
                
                const options = {
                    filter:filter,
                    update: update,
                }
                
                return options;
            }
    }